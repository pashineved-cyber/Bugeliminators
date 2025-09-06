import openai
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

client = openai.OpenAI(
    api_key = os.getenv("API_KEY"),
    base_url="https://chatapi.akash.network/api/v1"
)

def summarize_text(text: str) -> str:
    response = client.chat.completions.create(
        model="Meta-Llama-3-1-8B-Instruct-FP8",
        messages=[
            {"role": "user", "content": f"Summarize this document:\n\n{text}"}
        ],
    )
    return response.choices[0].message.content.strip()

def semantic_search(query: str, docs: list[str]) -> list[str]:
    # 🚨 For MVP: just ask LLM to find relevant docs (no FAISS yet)
    response = client.chat.completions.create(
        model="Meta-Llama-3-1-8B-Instruct-FP8",
        messages=[
            {
                "role": "user",
                "content": f"Find the most relevant documents for query: {query}\n\nDocs:\n" + "\n".join(docs)
            }
        ],
    )
    return response.choices[0].message.content.strip().split("\n")
