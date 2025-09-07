import faiss
import numpy as np
from sentence_transformers import SentenceTransformer

# Load embedding model once
embedder = SentenceTransformer("sentence-transformers/all-MiniLM-L6-v2")

# Global FAISS index (in-memory)
dimension = embedder.get_sentence_embedding_dimension()
index = faiss.IndexFlatL2(dimension)

# Store docs with mapping
doc_store: list[str] = []

def add_documents(docs: list[str]):
    global doc_store, index
    embeddings = embedder.encode(docs, convert_to_numpy=True)
    index.add(embeddings)
    doc_store.extend(docs)

def search_documents(query: str, top_k: int = 3) -> list[str]:
    embedding = embedder.encode([query], convert_to_numpy=True)
    D, I = index.search(embedding, top_k)
    results = [doc_store[i] for i in I[0] if i < len(doc_store)]
    return results
