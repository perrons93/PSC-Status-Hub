#import gevent.monkey
#gevent.monkey.patch_all()

import requests
from requests.exceptions import HTTPError

def OLTFStatus():
  req = 400
  try:
   response = requests.get("http://natux40:7025/oltf", timeout=5)
   req = response.status_code
  except HTTPError as http_err:
   print(f'HTTP error occurred: {http_err}')
  except Exception as err:
   print(f'Other error occured: {err}')
  return req

