def chunk_text(text: str, max_chars: int = 3000):
    """
    Split text into smaller chunks that fit in LLM context.
    Default ~3k chars per chunk (safe).
    """
    chunks = []
    for i in range(0, len(text), max_chars):
        chunks.append(text[i:i+max_chars])
    return chunks
