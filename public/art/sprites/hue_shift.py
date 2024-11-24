#!/usr/bin/env python3

import cv2 as cv
import numpy as np
import argparse

parser = argparse.ArgumentParser(prog='hue_shift')
parser.add_argument('--dir', choices=['left', 'right'])
parser.add_argument('--min', type=int)
parser.add_argument('--max', type=int)
parser.add_argument('--shift', type=int)
parser.add_argument('filename_in')
parser.add_argument('filename_out')
args = parser.parse_args()

# Load the image 
image = cv.imread(args.filename_in, cv.IMREAD_UNCHANGED)

# Extract alpha
image_a = image[:, :, 3]

# Convert to HSV and split channels
hsv = cv.cvtColor(image, cv.COLOR_BGR2HSV)
H, S, V = cv.split(hsv)

# Shift only greens (Hue near 120) around hue circle by 120 degrees to blues - remembering OpenCV halves all these values - see comment
if args.dir == 'left':
    H[(H > args.min) & (H < args.max)] -= args.shift
elif args.dir == 'right':
    H[(H > args.min) & (H < args.max)] += args.shift
else:
    assert False
#H[(H>25)&(H<45)] -= 20

# Recombine into single 3-channel image and convert back to RGB
result = cv.merge((H, S, V))
result = cv.cvtColor(result, cv.COLOR_HSV2BGR)

# Re-insert alpha layer
result = cv.cvtColor(result, cv.COLOR_BGR2BGRA)
result[:, :, 3] = image_a

# Write output
cv.imwrite(args.filename_out, result)
