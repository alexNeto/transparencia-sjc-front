from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from django.http import JsonResponse


def index(request):
    to_json = {
        "key1": "value1",
        "key2": "value2"
    }
    return JsonResponse(to_json)
