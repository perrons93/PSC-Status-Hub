from django.http import JsonResponse
from . import oauthRestTest, oltfRestTest

def oauthStatus(request):
    status = oauthRestTest.OAuthStatus()
    return JsonResponse({"status": status })

def oltfStatus(request):
    status = oltfRestTest.OLTFStatus()
    return JsonResponse({"status": status })
