from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from django.http import JsonResponse
import json

from raspagem.raspagem import Raspagem

raspagem = Raspagem()

def index(request):
    return JsonResponse(raspagem.raspatodos())

def data(request):
    data = {}
    data["data"] = raspagem.pegadata()
    return JsonResponse(data)
