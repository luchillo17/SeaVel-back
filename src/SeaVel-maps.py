#!/usr/bin/env python
import numpy as np
import pandas as pd

import sys, json

if len(sys.argv) <= 1:
    raise Exception('Invalid arguments')

"""
jsonParams should receive a dict with following structure:
{
    lon: number,
    lat: number,
    date: timestamp (still to be defined)
    freq: number (integer between 1 - 4)
    city: string? (still to be defined)
} 
"""
jsonParams = json.loads(sys.argv[1])


# --------------- Code Start --------------- 

jsonResult = {
    'enso': 'asdf',
    'seaLevel': 15,
    'globalTemp': 33,
    'fileName': 'asdf.jpg'
}

# --------------- Code ends --------------- 

print(json.dumps(jsonResult))

