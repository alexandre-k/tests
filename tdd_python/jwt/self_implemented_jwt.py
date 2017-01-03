import json
import hmac
from hashlib import sha256
from base64 import urlsafe_b64encode

segments = []

header_dict = {
    'typ': 'JWT',
    'alg': 'HS256'
}

json_header = json.dumps(header_dict)
print(json_header)

header = urlsafe_b64encode(json_header).rstrip('=')
print(header)
segments.append(header)

