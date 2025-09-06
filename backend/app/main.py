from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import summarize, search

app = FastAPI(title="Decentralized AI Summarizer & Search")

# ✅ Allow frontend dev server & future deployment URLs
origins = [
    "http://localhost:5173",   # Vite dev
    "http://127.0.0.1:5173",
    "http://localhost",        # in case served differently
    "http://127.0.0.1",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,        # 👈 instead of ["*"] for safety
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(summarize.router)
app.include_router(search.router)

@app.get("/")
async def root():
    return {"message": "Backend is running!"}
