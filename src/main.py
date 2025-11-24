from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

from src.env import config

MODE = config("MODE", cast=str, default='testing')

app = FastAPI()

app.mount('/static', StaticFiles(directory='src/static'), name='static')
STATIC_URL = 'https://storage.googleapis.com/mohaseb-test-bucket/static'
templates = Jinja2Templates(directory='src/templates')


@app.get("/")
async def get_landing_page(request: Request):
    return templates.TemplateResponse("index_new.html", {"request": request, "STATIC_URL": STATIC_URL})

@app.get("/terms")
async def get_terms(request: Request):
    return templates.TemplateResponse("terms.html", {"request": request, "STATIC_URL": STATIC_URL})

@app.get("/privacy")
async def get_privacy(request: Request):
    return templates.TemplateResponse("privacy.html", {"request": request, "STATIC_URL": STATIC_URL})

@app.get("/mode")
def get_mode():
    # JSON-ready dict -> json.dumps({"Hello": "World"})
    return {"Hello": "World", "mode": MODE}
