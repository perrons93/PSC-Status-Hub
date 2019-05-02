from django.http import JsonResponse
from . import oauthRestTest

def index(request):
    status = oauthRestTest.OAuthStatus()
    return JsonResponse({"status": status })

