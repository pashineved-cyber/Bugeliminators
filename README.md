# Decentralized AI-Powered Document Summarizer & Search
**AI summarization + semantic search, deployed on the [Akash Supercloud](https://akash.network).**  

Users can upload documents (PDF/TXT) and get summaries as well as perform semantic search all while it is being hosted on a decentralize and permissonless gpu compute.

## Why this project
- People deal with long research papers, reports, and documents every day. Peforms automated summarization enabling rapid understanding of any lengthy document.
- Traditional keyboard search is lengthy, slow and tiring process. Semantic search powered by embeddings allows users to locate contextually relevant content with   higher accuracy.
- Reduces **computational** load as well as **cost** by allowing users to make use of Akash's decentralized GPU network.
- Traditional NLP models for summarization and search are **resource hungry** and running them on Akash's decentralized network offers a cost effective alternative to traditional cloud computing services

**Real-world use cases:**
- 📚 Researchers → Summarize long papers.
- 📰 Journalists → Quickly scan reports.
- 🏢 Companies → Internal knowledge-base search

## Akash network
  - Akash is a decentralized cloud computing marketplace
  - instead of relying on traditional cloudcomputing services akash connects users who are in need of computing power to providers who have spare capacity
  - Rather than allowing the providers freedom to price their compute akash allows all the providers to present a bid, thus lowering proces by interoducing competion
  - It runs on blockchain principles and is open, permissionless, and censorship-
  - learn more about akash network on https://akash.network/docs/

  ### Frontend 
  - React + Vite + Tailwind 
  - Document upload & query search bar
  - Displays summaries + semantic search results
  
  ### Backend
  - FastAPI
  - Endpoints:
  - upload → PDF/TXT document
  - summarize → Summarize with HuggingFace model
  - search → Embedding-based semantic search
    
  ### AI Engine
  - **Summarization:** Meta-Llama-3-1-8B-Instruct-FP8
  - **Embeddings:** sentence-transformers/all-MiniLM-L6-v2
  - Optional GPU acceleration on Akash
  



