from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from django.http import JsonResponse
import json

from raspagem.raspagem import Raspagem

raspagem = Raspagem()

def index(request):
    raspagem.raspatodos()
    phonebook = {}
    phonebook2 = {"key": "value"}
    for i in range(10):
        phonebook[i] = phonebook2
        phonebook["Jack"] = 938377264
        phonebook["Jill"] = i

    #print(to_json)

    return JsonResponse(phonebook)

def data(request):
    data = {}
    data["data"] = raspagem.pegadata()
    return JsonResponse(data)
