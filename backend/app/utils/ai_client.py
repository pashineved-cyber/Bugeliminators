import openai
import os
from dotenv import load_dotenv
from app.utils.chunker import chunk_text

# Load environment variables from .env file
load_dotenv()

client = openai.OpenAI(
    api_key = os.getenv("API_KEY"),
    base_url="https://chatapi.akash.network/api/v1"
)

def summarize_text(text: str) -> str:
    chunks = chunk_text(text, max_chars=3000)  # safe chunks
    summaries = []

    for idx, chunk in enumerate(chunks):
        response = client.chat.completions.create(
            model="gpt-oss-120b",
            messages=[
                {
                    "role": "user",
                    "content": f"Summarize this part of the document (part {idx+1}/{len(chunks)}):\n\n{chunk}"
                }
            ],
        )
        summaries.append(response.choices[0].message.content.strip())

    # Final summary of summaries
    combined = "\n".join(summaries)
    final = client.chat.completions.create(
        model="Meta-Llama-3-1-8B-Instruct-FP8",
        messages=[
            {"role": "user", "content": f"Summarize the following summaries into one concise summary:\n\n{combined}"}
        ],
    )

    return final.choices[0].message.content.strip()

def generate_answer(query: str, context_chunks: list[str]) -> str:
    """
    Ask LLM to answer query using only retrieved chunks.
    """
    context = "\n\n".join(context_chunks)

    response = client.chat.completions.create(
        model="DeepSeek-V3-1",
        messages=[
            {
                "role": "system",
                "content": "You are a helpful assistant. Answer only using the provided context. "
                           "If the answer is not in the context, say 'I don’t know based on the provided documents.'"
            },
            {
                "role": "user",
                "content": f"Context:\n{context}\n\nQuestion: {query}"
            }
        ],
    )

    return response.choices[0].message.content.strip()
