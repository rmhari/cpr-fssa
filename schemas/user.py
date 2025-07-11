from pydantic import BaseModel
from uuid import UUID
from datetime import datetime

# ✅ Used for user registration
class UserCreate(BaseModel):
    username: str
    password: str

# ✅ Used for login
class UserLogin(BaseModel):
    username: str
    password: str

# ✅ Used in responses (excluding password)
class UserOut(BaseModel):
    id: UUID
    username: str
    created_at: datetime

    class Config:
        orm_mode = True

class UserResetPassword(BaseModel):
    username: str
    old_password: str
    new_password: str
