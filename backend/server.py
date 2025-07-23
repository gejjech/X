from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel
from typing import List, Optional
import os
from dotenv import load_dotenv
import uuid

load_dotenv()

app = FastAPI(title="Digital Agency API", version="1.0.0")

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# MongoDB connection
MONGO_URL = os.getenv("MONGO_URL", "mongodb://localhost:27017/digital_agency")
client = AsyncIOMotorClient(MONGO_URL)
db = client.digital_agency

# Pydantic models
class Service(BaseModel):
    id: str
    title: str
    description: str
    icon: str
    file_name: str

class PortfolioProject(BaseModel):
    id: str
    title: str
    description: str
    category: str
    status: str
    client: str
    image_url: str
    file_name: str

class ContactSubmission(BaseModel):
    name: str
    email: str
    message: str
    service_interest: Optional[str] = None

class Stats(BaseModel):
    projects_completed: int
    happy_clients: int
    success_rate: str
    support: str

# Initialize database with sample data
@app.on_event("startup")
async def startup_event():
    # Insert services data
    services_data = [
        {
            "id": str(uuid.uuid4()),
            "title": "Social Media Marketing",
            "description": "Instagram, TikTok, LinkedIn, YouTube - Complete social media management",
            "icon": "📱",
            "file_name": "SERVICE_1.exe"
        },
        {
            "id": str(uuid.uuid4()),
            "title": "WhatsApp Business Solutions",
            "description": "Essential for UAE market - Complete WhatsApp business integration",
            "icon": "💬",
            "file_name": "SERVICE_2.exe"
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Multi-Language Marketing",
            "description": "Arabic, English, Hindi, Urdu content creation & cultural marketing",
            "icon": "🌐",
            "file_name": "SERVICE_3.exe"
        },
        {
            "id": str(uuid.uuid4()),
            "title": "SEO & Search Marketing",
            "description": "Local SEO for Dubai & UAE with Arabic keyword optimization",
            "icon": "🔍",
            "file_name": "SERVICE_4.exe"
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Content Marketing",
            "description": "AI-powered content generation and visual storytelling",
            "icon": "📝",
            "file_name": "SERVICE_5.exe"
        },
        {
            "id": str(uuid.uuid4()),
            "title": "E-commerce Solutions",
            "description": "Complete e-commerce setup with UAE marketplace integration",
            "icon": "🛒",
            "file_name": "SERVICE_6.exe"
        },
        {
            "id": str(uuid.uuid4()),
            "title": "AI Solutions",
            "description": "Cutting-edge AI chatbots with Arabic language support",
            "icon": "🤖",
            "file_name": "SERVICE_7.exe"
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Marketing Automation",
            "description": "Complete CRM implementation and lead nurturing systems",
            "icon": "⚡",
            "file_name": "SERVICE_8.exe"
        },
        {
            "id": str(uuid.uuid4()),
            "title": "AR/VR Marketing",
            "description": "Immersive experiences with AR try-ons and virtual showrooms",
            "icon": "🥽",
            "file_name": "SERVICE_9.exe"
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Web3 & Blockchain",
            "description": "Future-ready NFT campaigns and cryptocurrency integration",
            "icon": "🔗",
            "file_name": "SERVICE_10.exe"
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Voice & Audio Marketing",
            "description": "Podcast marketing and voice search optimization",
            "icon": "🎙️",
            "file_name": "SERVICE_11.exe"
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Event Marketing",
            "description": "Dubai Shopping Festival campaigns and virtual event management",
            "icon": "🎉",
            "file_name": "SERVICE_12.exe"
        }
    ]

    # Check if services already exist
    if await db.services.count_documents({}) == 0:
        await db.services.insert_many(services_data)

    # Insert portfolio projects
    portfolio_data = [
        {
            "id": str(uuid.uuid4()),
            "title": "Dubai Fashion Week - AR Experience",
            "description": "Revolutionary augmented reality fashion showcase featuring virtual try-ons and 360° runway experiences.",
            "category": "AR/VR_MARKETING",
            "status": "COMPLETED",
            "client": "Dubai Fashion Council",
            "image_url": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            "file_name": "PROJECT_1.exe"
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Emirates Hotel - AI Concierge",
            "description": "Multilingual AI chatbot supporting Arabic, English, Hindi for 24/7 guest services and bookings.",
            "category": "AI_SOLUTIONS",
            "status": "LIVE",
            "client": "Emirates Hospitality Group",
            "image_url": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
            "file_name": "PROJECT_2.exe"
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Noon.com - Ramadan Campaign",
            "description": "Cultural e-commerce campaign with Arabic content and Islamic calendar integration.",
            "category": "E-COMMERCE",
            "status": "COMPLETED",
            "client": "Noon E-commerce",
            "image_url": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            "file_name": "PROJECT_3.exe"
        },
        {
            "id": str(uuid.uuid4()),
            "title": "ADNOC - Smart City Integration",
            "description": "IoT-powered smart city solutions with real-time energy monitoring and citizen engagement.",
            "category": "SMART_CITY",
            "status": "DEVELOPMENT",
            "client": "ADNOC Group",
            "image_url": "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            "file_name": "PROJECT_4.exe"
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Dubai Health Authority - Telemedicine Platform",
            "description": "Multi-language healthcare platform with AI diagnosis and virtual consultations.",
            "category": "HEALTHCARE",
            "status": "LIVE",
            "client": "Dubai Health Authority",
            "image_url": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            "file_name": "PROJECT_5.exe"
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Emirates Real Estate - Virtual Tours",
            "description": "360° virtual property tours with AR furniture placement and multilingual support.",
            "category": "REAL_ESTATE",
            "status": "COMPLETED",
            "client": "Emirates Real Estate",
            "image_url": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
            "file_name": "PROJECT_6.exe"
        }
    ]

    # Check if portfolio already exists
    if await db.portfolio.count_documents({}) == 0:
        await db.portfolio.insert_many(portfolio_data)

# API Routes
@app.get("/api/services", response_model=List[Service])
async def get_services():
    """Get all services"""
    services = await db.services.find().to_list(100)
    return services

@app.get("/api/portfolio", response_model=List[PortfolioProject])
async def get_portfolio(category: Optional[str] = None):
    """Get portfolio projects, optionally filtered by category"""
    filter_query = {}
    if category and category.upper() != "ALL":
        filter_query["category"] = category.upper()
    
    projects = await db.portfolio.find(filter_query).to_list(100)
    return projects

@app.get("/api/stats", response_model=Stats)
async def get_stats():
    """Get company statistics"""
    return Stats(
        projects_completed=500,
        happy_clients=150,
        success_rate="99%",
        support="24/7"
    )

@app.post("/api/contact")
async def submit_contact(contact: ContactSubmission):
    """Submit contact form"""
    try:
        contact_data = contact.dict()
        contact_data["id"] = str(uuid.uuid4())
        contact_data["submitted_at"] = "2024-01-01T00:00:00Z"  # In real app, use datetime.utcnow()
        
        result = await db.contacts.insert_one(contact_data)
        return {"message": "Contact form submitted successfully", "id": str(result.inserted_id)}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error submitting contact form: {str(e)}")

@app.get("/api/health")
async def health_check():
    """Health check endpoint"""
    return {"status": "healthy", "message": "Digital Agency API is running"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)