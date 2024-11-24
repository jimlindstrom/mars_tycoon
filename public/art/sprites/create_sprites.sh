#!/bin/bash

set -e

# trim and standardize size
for filename_in in `find mars_image_[0-9][0-9].png`; do
    filename_out=`echo $filename_in | sed -e 's/\.png/_resized.png/'`

    magick $filename_in -trim +repage /tmp/sprite_trimmed.png

    width=`identify /tmp/sprite_trimmed.png | awk '{print $3}' | sed -e 's/x/ /' | awk '{print $1}'`
    height=`identify /tmp/sprite_trimmed.png | awk '{print $3}' | sed -e 's/x/ /' | awk '{print $2}'`

    new_height=`echo "$height + ($width / 2)" | bc`
    new_width=`echo $new_height + $new_height | bc`

    magick /tmp/sprite_trimmed.png -gravity North -background none -extent ${new_width}x${new_height} /tmp/sprite_padded.png
    # magick /tmp/sprite_padded.png -resize 92x48\! $filename_out
    magick /tmp/sprite_padded.png -resize 184x96\! $filename_out
done

# override size/placement for image 01
filename_in="mars_image_01.png" # 291x265
filename_out="mars_image_01_resized.png"
magick $filename_in -background none -rotate 2.5 -trim +repage /tmp/sprite_trimmed.png # 286x254
width=`identify /tmp/sprite_trimmed.png | awk '{print $3}' | sed -e 's/x/ /' | awk '{print $1}'`
height=`identify /tmp/sprite_trimmed.png | awk '{print $3}' | sed -e 's/x/ /' | awk '{print $2}'`
h_over_w=`echo "scale=4; $height / $width" | bc | sed -e 's/^\./0./'`
width_pct="0.3"
new_width=`echo "$width_pct * 184" | bc`
new_height=`echo "$new_width * $h_over_w" | bc`
magick /tmp/sprite_trimmed.png -resize ${new_width}x${new_height} /tmp/sprite_scaled.png
origin_y=25
if [ "$origin_y" -gt "48" ]; then
  final_width=184
  final_height=`echo "96 + ($origin_y - 48)" | bc`
  magick /tmp/sprite_scaled.png -gravity North -background none -extent ${final_width}x${final_height} $filename_out
else
  final_width=184
  final_height=96
  magick /tmp/sprite_scaled.png -gravity Center -background none -extent ${final_width}x${final_height} $filename_out
fi

# override size/placement for image 03
filename_in="mars_image_03.png" # 291x265
filename_out="mars_image_03_resized.png"
magick $filename_in -background none -rotate 0 -trim +repage /tmp/sprite_trimmed.png # 286x254
width=`identify /tmp/sprite_trimmed.png | awk '{print $3}' | sed -e 's/x/ /' | awk '{print $1}'`
height=`identify /tmp/sprite_trimmed.png | awk '{print $3}' | sed -e 's/x/ /' | awk '{print $2}'`
h_over_w=`echo "scale=4; $height / $width" | bc | sed -e 's/^\./0./'`
width_pct="0.25"
new_width=`echo "$width_pct * 184" | bc`
new_height=`echo "$new_width * $h_over_w" | bc`
magick /tmp/sprite_trimmed.png -resize ${new_width}x${new_height} /tmp/sprite_scaled.png
origin_y=48
if [ "$origin_y" -gt "48" ]; then
  final_width=184
  final_height=`echo "96 + ($origin_y - 48)" | bc`
else
  final_width=184
  final_height=96
fi
magick /tmp/sprite_scaled.png -gravity North -background none -extent ${final_width}x${final_height} $filename_out

# override size/placement for image 04
filename_in="mars_image_04.png" # 291x265
filename_out="mars_image_04_resized.png"
magick $filename_in -background none -rotate -2.5 -trim +repage /tmp/sprite_trimmed.png # 286x254
width=`identify /tmp/sprite_trimmed.png | awk '{print $3}' | sed -e 's/x/ /' | awk '{print $1}'`
height=`identify /tmp/sprite_trimmed.png | awk '{print $3}' | sed -e 's/x/ /' | awk '{print $2}'`
h_over_w=`echo "scale=4; $height / $width" | bc | sed -e 's/^\./0./'`
width_pct="0.3"
new_width=`echo "$width_pct * 184" | bc`
new_height=`echo "$new_width * $h_over_w" | bc`
magick /tmp/sprite_trimmed.png -resize ${new_width}x${new_height} /tmp/sprite_scaled.png
origin_y=55
if [ "$origin_y" -gt "48" ]; then
  final_width=184
  final_height=`echo "96 + ($origin_y - 48)" | bc`
else
  final_width=184
  final_height=96
fi
magick /tmp/sprite_scaled.png -gravity North -background none -extent ${final_width}x${final_height} $filename_out

# override size/placement for image 05
filename_in="mars_image_05.png" # 291x265
filename_out="mars_image_05_resized.png"
magick $filename_in -background none -rotate -1 -trim +repage /tmp/sprite_trimmed.png # 286x254
width=`identify /tmp/sprite_trimmed.png | awk '{print $3}' | sed -e 's/x/ /' | awk '{print $1}'`
height=`identify /tmp/sprite_trimmed.png | awk '{print $3}' | sed -e 's/x/ /' | awk '{print $2}'`
h_over_w=`echo "scale=4; $height / $width" | bc | sed -e 's/^\./0./'`
width_pct="0.35"
new_width=`echo "$width_pct * 184" | bc`
new_height=`echo "$new_width * $h_over_w" | bc`
magick /tmp/sprite_trimmed.png -resize ${new_width}x${new_height} /tmp/sprite_scaled.png
origin_y=40
if [ "$origin_y" -gt "48" ]; then
  final_width=184
  final_height=`echo "96 + ($origin_y - 48)" | bc`
else
  final_width=184
  final_height=96
fi
magick /tmp/sprite_scaled.png -gravity North -background none -extent ${final_width}x${final_height} $filename_out

# override size/placement for image 07
filename_in="mars_image_07.png" # 291x265
filename_out="mars_image_07_resized.png"
magick $filename_in -background none -rotate 1 -trim +repage /tmp/sprite_trimmed.png # 286x254
width=`identify /tmp/sprite_trimmed.png | awk '{print $3}' | sed -e 's/x/ /' | awk '{print $1}'`
height=`identify /tmp/sprite_trimmed.png | awk '{print $3}' | sed -e 's/x/ /' | awk '{print $2}'`
h_over_w=`echo "scale=4; $height / $width" | bc | sed -e 's/^\./0./'`
width_pct="0.33"
new_width=`echo "$width_pct * 184" | bc`
new_height=`echo "$new_width * $h_over_w" | bc`
magick /tmp/sprite_trimmed.png -resize ${new_width}x${new_height} /tmp/sprite_scaled.png
origin_y=83
if [ "$origin_y" -gt "48" ]; then
  final_width=184
  final_height=`echo "96 + ($origin_y - 48)" | bc`
else
  final_width=184
  final_height=96
fi
magick /tmp/sprite_scaled.png -gravity North -background none -extent ${final_width}x${final_height} $filename_out

# override size/placement for image 09
filename_in="mars_image_09.png" # 291x265
filename_out="mars_image_09_resized.png"
magick $filename_in -background none -rotate 1 -trim +repage /tmp/sprite_trimmed.png # 286x254
width=`identify /tmp/sprite_trimmed.png | awk '{print $3}' | sed -e 's/x/ /' | awk '{print $1}'`
height=`identify /tmp/sprite_trimmed.png | awk '{print $3}' | sed -e 's/x/ /' | awk '{print $2}'`
h_over_w=`echo "scale=4; $height / $width" | bc | sed -e 's/^\./0./'`
width_pct="0.48"
new_width=`echo "$width_pct * 184" | bc`
new_height=`echo "$new_width * $h_over_w" | bc`
magick /tmp/sprite_trimmed.png -resize ${new_width}x${new_height} /tmp/sprite_scaled.png
origin_y=55
if [ "$origin_y" -gt "48" ]; then
  final_width=184
  final_height=`echo "96 + ($origin_y - 48)" | bc`
else
  final_width=184
  final_height=96
fi
magick /tmp/sprite_scaled.png -gravity North -background none -extent ${final_width}x${final_height} $filename_out

# override size/placement for image 10
filename_in="mars_image_10.png" # 291x265
filename_out="mars_image_10_resized.png"
magick $filename_in -background none -rotate -2.5 -trim +repage /tmp/sprite_trimmed.png # 286x254
width=`identify /tmp/sprite_trimmed.png | awk '{print $3}' | sed -e 's/x/ /' | awk '{print $1}'`
height=`identify /tmp/sprite_trimmed.png | awk '{print $3}' | sed -e 's/x/ /' | awk '{print $2}'`
h_over_w=`echo "scale=4; $height / $width" | bc | sed -e 's/^\./0./'`
width_pct="0.26"
new_width=`echo "$width_pct * 184" | bc`
new_height=`echo "$new_width * $h_over_w" | bc`
magick /tmp/sprite_trimmed.png -resize ${new_width}x${new_height} /tmp/sprite_scaled.png
origin_y=75
if [ "$origin_y" -gt "48" ]; then
  final_width=184
  final_height=`echo "96 + ($origin_y - 48)" | bc`
else
  final_width=184
  final_height=96
fi
magick /tmp/sprite_scaled.png -gravity North -background none -extent ${final_width}x${final_height} $filename_out

# override size/placement for image 13
filename_in="mars_image_13.png" # 291x265
filename_out="mars_image_13_resized.png"
magick $filename_in -background none -rotate 0 -trim +repage /tmp/sprite_trimmed.png # 286x254
width=`identify /tmp/sprite_trimmed.png | awk '{print $3}' | sed -e 's/x/ /' | awk '{print $1}'`
height=`identify /tmp/sprite_trimmed.png | awk '{print $3}' | sed -e 's/x/ /' | awk '{print $2}'`
h_over_w=`echo "scale=4; $height / $width" | bc | sed -e 's/^\./0./'`
width_pct="0.54"
new_width=`echo "$width_pct * 184" | bc`
new_height=`echo "$new_width * $h_over_w" | bc`
magick /tmp/sprite_trimmed.png -resize ${new_width}x${new_height} /tmp/sprite_scaled.png
origin_y=59
if [ "$origin_y" -gt "48" ]; then
  final_width=184
  final_height=`echo "96 + ($origin_y - 48)" | bc`
else
  final_width=184
  final_height=96
fi
magick /tmp/sprite_scaled.png -gravity North -background none -extent ${final_width}x${final_height} $filename_out

# override size/placement for image 14
filename_in="mars_image_14.png" # 291x265
filename_out="mars_image_14_resized.png"
magick $filename_in -background none -rotate -2.5 -trim +repage /tmp/sprite_trimmed.png # 286x254
width=`identify /tmp/sprite_trimmed.png | awk '{print $3}' | sed -e 's/x/ /' | awk '{print $1}'`
height=`identify /tmp/sprite_trimmed.png | awk '{print $3}' | sed -e 's/x/ /' | awk '{print $2}'`
h_over_w=`echo "scale=4; $height / $width" | bc | sed -e 's/^\./0./'`
width_pct="0.35"
new_width=`echo "$width_pct * 184" | bc`
new_height=`echo "$new_width * $h_over_w" | bc`
magick /tmp/sprite_trimmed.png -resize ${new_width}x${new_height} /tmp/sprite_scaled.png
origin_y=45
if [ "$origin_y" -gt "48" ]; then
  final_width=184
  final_height=`echo "96 + ($origin_y - 48)" | bc`
else
  final_width=184
  final_height=96
fi
magick /tmp/sprite_scaled.png -gravity North -background none -extent ${final_width}x${final_height} $filename_out

# override size/placement for image 16
filename_in="mars_image_16.png" # 291x265
filename_out="mars_image_16_resized.png"
magick $filename_in -background none -rotate 0 -trim +repage /tmp/sprite_trimmed.png # 286x254
width=`identify /tmp/sprite_trimmed.png | awk '{print $3}' | sed -e 's/x/ /' | awk '{print $1}'`
height=`identify /tmp/sprite_trimmed.png | awk '{print $3}' | sed -e 's/x/ /' | awk '{print $2}'`
h_over_w=`echo "scale=4; $height / $width" | bc | sed -e 's/^\./0./'`
width_pct="0.55"
new_width=`echo "$width_pct * 184" | bc`
new_height=`echo "$new_width * $h_over_w" | bc`
magick /tmp/sprite_trimmed.png -resize ${new_width}x${new_height} /tmp/sprite_scaled.png
origin_y=35
if [ "$origin_y" -gt "48" ]; then
  final_width=184
  final_height=`echo "96 + ($origin_y - 48)" | bc`
else
  final_width=184
  final_height=96
fi
magick /tmp/sprite_scaled.png -gravity North -background none -extent ${final_width}x${final_height} $filename_out

# override size/placement for image 17
filename_in="mars_image_17.png" # 291x265
filename_out="mars_image_17_resized.png"
magick $filename_in -background none -rotate 0 -trim +repage /tmp/sprite_trimmed.png # 286x254
width=`identify /tmp/sprite_trimmed.png | awk '{print $3}' | sed -e 's/x/ /' | awk '{print $1}'`
height=`identify /tmp/sprite_trimmed.png | awk '{print $3}' | sed -e 's/x/ /' | awk '{print $2}'`
h_over_w=`echo "scale=4; $height / $width" | bc | sed -e 's/^\./0./'`
width_pct="0.4"
new_width=`echo "$width_pct * 184" | bc`
new_height=`echo "$new_width * $h_over_w" | bc`
magick /tmp/sprite_trimmed.png -resize ${new_width}x${new_height} /tmp/sprite_scaled.png
origin_y=65
if [ "$origin_y" -gt "48" ]; then
  final_width=184
  final_height=`echo "96 + ($origin_y - 48)" | bc`
else
  final_width=184
  final_height=96
fi
magick /tmp/sprite_scaled.png -gravity North -background none -extent ${final_width}x${final_height} $filename_out

# override size/placement for image 18
filename_in="mars_image_18.png" # 291x265
filename_out="mars_image_18_resized.png"
magick $filename_in -background none -rotate 0 -trim +repage /tmp/sprite_trimmed.png # 286x254
width=`identify /tmp/sprite_trimmed.png | awk '{print $3}' | sed -e 's/x/ /' | awk '{print $1}'`
height=`identify /tmp/sprite_trimmed.png | awk '{print $3}' | sed -e 's/x/ /' | awk '{print $2}'`
h_over_w=`echo "scale=4; $height / $width" | bc | sed -e 's/^\./0./'`
width_pct="0.16"
new_width=`echo "$width_pct * 184" | bc`
new_height=`echo "$new_width * $h_over_w" | bc`
magick /tmp/sprite_trimmed.png -resize ${new_width}x${new_height} /tmp/sprite_scaled.png
origin_y=105
if [ "$origin_y" -gt "48" ]; then
  final_width=184
  final_height=`echo "96 + ($origin_y - 48)" | bc`
else
  final_width=184
  final_height=96
fi
magick /tmp/sprite_scaled.png -gravity North -background none -extent ${final_width}x${final_height} $filename_out

# override size/placement for image 19
filename_in="mars_image_19.png" # 291x265
filename_out="mars_image_19_resized.png"
magick $filename_in -background none -rotate 0 -trim +repage /tmp/sprite_trimmed.png # 286x254
width=`identify /tmp/sprite_trimmed.png | awk '{print $3}' | sed -e 's/x/ /' | awk '{print $1}'`
height=`identify /tmp/sprite_trimmed.png | awk '{print $3}' | sed -e 's/x/ /' | awk '{print $2}'`
h_over_w=`echo "scale=4; $height / $width" | bc | sed -e 's/^\./0./'`
width_pct="0.95"
new_width=`echo "$width_pct * 184" | bc`
new_height=`echo "$new_width * $h_over_w" | bc`
magick /tmp/sprite_trimmed.png -resize ${new_width}x${new_height} /tmp/sprite_scaled.png
origin_y=165
if [ "$origin_y" -gt "48" ]; then
  final_width=184
  final_height=`echo "96 + ($origin_y - 48)" | bc`
else
  final_width=184
  final_height=96
fi
magick /tmp/sprite_scaled.png -gravity North -background none -extent ${final_width}x${final_height} $filename_out

# override size/placement for image 20
filename_in="mars_image_20.png" # 291x265
filename_out="mars_image_20_resized.png"
magick $filename_in -background none -rotate 2.5 -trim +repage /tmp/sprite_trimmed.png # 286x254
width=`identify /tmp/sprite_trimmed.png | awk '{print $3}' | sed -e 's/x/ /' | awk '{print $1}'`
height=`identify /tmp/sprite_trimmed.png | awk '{print $3}' | sed -e 's/x/ /' | awk '{print $2}'`
h_over_w=`echo "scale=4; $height / $width" | bc | sed -e 's/^\./0./'`
width_pct="0.75"
new_width=`echo "$width_pct * 184" | bc`
new_height=`echo "$new_width * $h_over_w" | bc`
magick /tmp/sprite_trimmed.png -resize ${new_width}x${new_height} /tmp/sprite_scaled.png
origin_y=75
if [ "$origin_y" -gt "48" ]; then
  final_width=184
  final_height=`echo "96 + ($origin_y - 48)" | bc`
else
  final_width=184
  final_height=96
fi
magick /tmp/sprite_scaled.png -gravity North -background none -extent ${final_width}x${final_height} $filename_out

# override size/placement for image 22
filename_in="mars_image_22.png" # 291x265
filename_out="mars_image_22_resized.png"
magick $filename_in -background none -rotate 0 -trim +repage /tmp/sprite_trimmed.png # 286x254
width=`identify /tmp/sprite_trimmed.png | awk '{print $3}' | sed -e 's/x/ /' | awk '{print $1}'`
height=`identify /tmp/sprite_trimmed.png | awk '{print $3}' | sed -e 's/x/ /' | awk '{print $2}'`
h_over_w=`echo "scale=4; $height / $width" | bc | sed -e 's/^\./0./'`
width_pct="0.75"
new_width=`echo "$width_pct * 184" | bc`
new_height=`echo "$new_width * $h_over_w" | bc`
magick /tmp/sprite_trimmed.png -resize ${new_width}x${new_height} /tmp/sprite_scaled.png
origin_y=47
if [ "$origin_y" -gt "48" ]; then
  final_width=184
  final_height=`echo "96 + ($origin_y - 48)" | bc`
else
  final_width=184
  final_height=96
fi
magick /tmp/sprite_scaled.png -gravity North -background none -extent ${final_width}x${final_height} $filename_out

# override size/placement for image 23
filename_in="mars_image_23.png" # 291x265
filename_out="mars_image_23_resized.png"
magick $filename_in -background none -rotate 0 -trim +repage /tmp/sprite_trimmed.png # 286x254
width=`identify /tmp/sprite_trimmed.png | awk '{print $3}' | sed -e 's/x/ /' | awk '{print $1}'`
height=`identify /tmp/sprite_trimmed.png | awk '{print $3}' | sed -e 's/x/ /' | awk '{print $2}'`
h_over_w=`echo "scale=4; $height / $width" | bc | sed -e 's/^\./0./'`
width_pct="0.8"
new_width=`echo "$width_pct * 184" | bc`
new_height=`echo "$new_width * $h_over_w" | bc`
magick /tmp/sprite_trimmed.png -resize ${new_width}x${new_height} /tmp/sprite_scaled.png
origin_y=47
if [ "$origin_y" -gt "48" ]; then
  final_width=184
  final_height=`echo "96 + ($origin_y - 48)" | bc`
else
  final_width=184
  final_height=96
fi
magick /tmp/sprite_scaled.png -gravity North -background none -extent ${final_width}x${final_height} $filename_out

# override size/placement for image 24
filename_in="mars_image_24.png" # 291x265
filename_out="mars_image_24_resized.png"
magick $filename_in -background none -rotate 0 -trim +repage /tmp/sprite_trimmed.png # 286x254
width=`identify /tmp/sprite_trimmed.png | awk '{print $3}' | sed -e 's/x/ /' | awk '{print $1}'`
height=`identify /tmp/sprite_trimmed.png | awk '{print $3}' | sed -e 's/x/ /' | awk '{print $2}'`
h_over_w=`echo "scale=4; $height / $width" | bc | sed -e 's/^\./0./'`
width_pct="0.70"
new_width=`echo "$width_pct * 184" | bc`
new_height=`echo "$new_width * $h_over_w" | bc`
magick /tmp/sprite_trimmed.png -resize ${new_width}x${new_height} /tmp/sprite_scaled.png
origin_y=60
if [ "$origin_y" -gt "48" ]; then
  final_width=184
  final_height=`echo "96 + ($origin_y - 48)" | bc`
else
  final_width=184
  final_height=96
fi
magick /tmp/sprite_scaled.png -gravity North -background none -extent ${final_width}x${final_height} $filename_out

# override size/placement for image 25
filename_in="mars_image_25.png" # 291x265
filename_out="mars_image_25_resized.png"
magick $filename_in -background none -rotate 0 -trim +repage /tmp/sprite_trimmed.png # 286x254
width=`identify /tmp/sprite_trimmed.png | awk '{print $3}' | sed -e 's/x/ /' | awk '{print $1}'`
height=`identify /tmp/sprite_trimmed.png | awk '{print $3}' | sed -e 's/x/ /' | awk '{print $2}'`
h_over_w=`echo "scale=4; $height / $width" | bc | sed -e 's/^\./0./'`
width_pct="0.70"
new_width=`echo "$width_pct * 184" | bc`
new_height=`echo "$new_width * $h_over_w" | bc`
magick /tmp/sprite_trimmed.png -resize ${new_width}x${new_height} /tmp/sprite_scaled.png
origin_y=75
if [ "$origin_y" -gt "48" ]; then
  final_width=184
  final_height=`echo "96 + ($origin_y - 48)" | bc`
else
  final_width=184
  final_height=96
fi
magick /tmp/sprite_scaled.png -gravity North -background none -extent ${final_width}x${final_height} $filename_out

# override size/placement for image 26
filename_in="mars_image_26.png" # 291x265
filename_out="mars_image_26_resized.png"
magick $filename_in -background none -rotate -0.5 -trim +repage /tmp/sprite_trimmed.png # 286x254
width=`identify /tmp/sprite_trimmed.png | awk '{print $3}' | sed -e 's/x/ /' | awk '{print $1}'`
height=`identify /tmp/sprite_trimmed.png | awk '{print $3}' | sed -e 's/x/ /' | awk '{print $2}'`
h_over_w=`echo "scale=4; $height / $width" | bc | sed -e 's/^\./0./'`
width_pct="0.60"
new_width=`echo "$width_pct * 184" | bc`
new_height=`echo "$new_width * $h_over_w" | bc`
magick /tmp/sprite_trimmed.png -resize ${new_width}x${new_height} /tmp/sprite_scaled.png
origin_y=84
if [ "$origin_y" -gt "48" ]; then
  final_width=184
  final_height=`echo "96 + ($origin_y - 48)" | bc`
else
  final_width=184
  final_height=96
fi
magick /tmp/sprite_scaled.png -gravity North -background none -extent ${final_width}x${final_height} $filename_out

# override size/placement for image 27
filename_in="mars_image_27.png" # 291x265
filename_out="mars_image_27_resized.png"
magick $filename_in -background none -rotate 0 -trim +repage /tmp/sprite_trimmed.png # 286x254
width=`identify /tmp/sprite_trimmed.png | awk '{print $3}' | sed -e 's/x/ /' | awk '{print $1}'`
height=`identify /tmp/sprite_trimmed.png | awk '{print $3}' | sed -e 's/x/ /' | awk '{print $2}'`
h_over_w=`echo "scale=4; $height / $width" | bc | sed -e 's/^\./0./'`
width_pct="0.60"
new_width=`echo "$width_pct * 184" | bc`
new_height=`echo "$new_width * $h_over_w" | bc`
magick /tmp/sprite_trimmed.png -resize ${new_width}x${new_height} /tmp/sprite_scaled.png
origin_y=64
if [ "$origin_y" -gt "48" ]; then
  final_width=184
  final_height=`echo "96 + ($origin_y - 48)" | bc`
else
  final_width=184
  final_height=96
fi
magick /tmp/sprite_scaled.png -gravity North -background none -extent ${final_width}x${final_height} $filename_out

# override size/placement for image 28
filename_in="mars_image_28.png" # 291x265
filename_out="mars_image_28_resized.png"
magick $filename_in -background none -rotate 0 -trim +repage /tmp/sprite_trimmed.png # 286x254
width=`identify /tmp/sprite_trimmed.png | awk '{print $3}' | sed -e 's/x/ /' | awk '{print $1}'`
height=`identify /tmp/sprite_trimmed.png | awk '{print $3}' | sed -e 's/x/ /' | awk '{print $2}'`
h_over_w=`echo "scale=4; $height / $width" | bc | sed -e 's/^\./0./'`
width_pct="0.70"
new_width=`echo "$width_pct * 184" | bc`
new_height=`echo "$new_width * $h_over_w" | bc`
magick /tmp/sprite_trimmed.png -resize ${new_width}x${new_height} /tmp/sprite_scaled.png
origin_y=68
if [ "$origin_y" -gt "48" ]; then
  final_width=184
  final_height=`echo "96 + ($origin_y - 48)" | bc`
else
  final_width=184
  final_height=96
fi
magick /tmp/sprite_scaled.png -gravity North -background none -extent ${final_width}x${final_height} $filename_out

# re-center in image
cp mars_image_01_resized.png mars_image_01_final.png
cp mars_image_02_resized.png mars_image_02_final.png
magick mars_image_03_resized.png -page +0-4  +repage -background none -flatten mars_image_03_final.png
magick mars_image_04_resized.png -page -6-12 +repage -background none -flatten mars_image_04_final.png
magick mars_image_05_resized.png -page +0+8  -background none -flatten mars_image_05_final.png
magick mars_image_06_resized.png -page +1+14 -background none -flatten mars_image_06_final.png
magick mars_image_07_resized.png -page -4-11 +repage -background none -flatten mars_image_07_final.png
magick mars_image_08_resized.png -page +0+3  -background none -flatten mars_image_08_final.png
magick mars_image_09_resized.png -page +0+11 -background none -flatten mars_image_09_final.png
magick mars_image_10_resized.png -page +0-15 +repage -background none -flatten mars_image_10_final.png
magick mars_image_11_resized.png -resize 48x24 -background none -gravity center -extent 96x48 mars_image_11_final.png
magick mars_image_12_resized.png -page +0+4  -background none -flatten mars_image_12_final.png
magick mars_image_13_resized.png -page +0+14 -background none -flatten mars_image_13_final.png
magick mars_image_14_resized.png -page -4+12 -background none -flatten mars_image_14_final.png
magick mars_image_15_resized.png -page +0+6  -background none -flatten mars_image_15_final.png
magick mars_image_16_resized.png -page +0+0  -background none -flatten mars_image_16_final.png
magick mars_image_17_resized.png -page +0+0  -background none -flatten mars_image_17_final.png
magick mars_image_18_resized.png -page +0+0  -background none -flatten mars_image_18_final.png
magick mars_image_19_resized.png -page +0+0  -background none -flatten mars_image_19_final.png
magick mars_image_20_resized.png -page +0+0  -background none -flatten mars_image_20_final.png
magick mars_image_21_resized.png -page +0+0  -background none -flatten mars_image_21_final.png
magick mars_image_22_resized.png -page +0+15  -background none -flatten mars_image_22_final.png
magick mars_image_23_resized.png -resize 48x24 -background none -gravity center -extent 96x48 mars_image_23_final.png
magick mars_image_24_resized.png -page +0+0  -background none -flatten mars_image_24_final.png
magick mars_image_25_resized.png -page +0+0  -background none -flatten mars_image_25_final.png
magick mars_image_26_resized.png -page +0+0  -background none -flatten mars_image_26_final.png
magick mars_image_27_resized.png -page +0+0  -background none -flatten mars_image_27_final.png
magick mars_image_28_resized.png -page +0+0  -background none -flatten mars_image_28_final.png
magick mars_image_29_resized.png -page +0+0  -background none -flatten mars_image_29_final.png

# generate a preview, on top of some tiles
magick \
    -size 184x96 canvas:transparent \
    -stroke red -strokewidth 1 -draw "rectangle 0,0,183,95" \
    ../tiles/tile_01_rot.png -geometry +46,0 -composite \
    ../tiles/tile_01_rot.png -geometry +0+24 -composite \
    ../tiles/tile_01_rot.png -geometry +92+24 -composite \
    ../tiles/tile_01_rot.png -geometry +46+48 -composite \
    mars_image_01_final.png -geometry -0+0 -composite \
    mars_image_01_preview.png

magick \
    -size 184x96 canvas:transparent \
    -stroke red -strokewidth 1 -draw "rectangle 0,0,183,95" \
    ../tiles/tile_01_rot.png -geometry +46,0 -composite \
    ../tiles/tile_01_rot.png -geometry +0+24 -composite \
    ../tiles/tile_01_rot.png -geometry +92+24 -composite \
    ../tiles/tile_01_rot.png -geometry +46+48 -composite \
    mars_image_02_final.png -geometry -0+0 -composite \
    mars_image_02_preview.png

magick \
    -size 184x96 canvas:transparent \
    -stroke red -strokewidth 1 -draw "rectangle 0,0,183,95" \
    ../tiles/tile_01_rot.png -geometry +46,0 -composite \
    ../tiles/tile_01_rot.png -geometry +0+24 -composite \
    ../tiles/tile_01_rot.png -geometry +92+24 -composite \
    ../tiles/tile_01_rot.png -geometry +46+48 -composite \
    mars_image_03_final.png -geometry +0+0 -composite \
    mars_image_03_preview.png

magick \
    -size 184x96 canvas:transparent \
    -stroke red -strokewidth 1 -draw "rectangle 0,0,183,95" \
    ../tiles/tile_01_rot.png -geometry +46,0 -composite \
    ../tiles/tile_01_rot.png -geometry +0+24 -composite \
    ../tiles/tile_01_rot.png -geometry +92+24 -composite \
    ../tiles/tile_01_rot.png -geometry +46+48 -composite \
    mars_image_04_final.png -geometry +0+0 -composite \
    mars_image_04_preview.png

magick \
    -size 184x96 canvas:transparent \
    -stroke red -strokewidth 1 -draw "rectangle 0,0,183,95" \
    ../tiles/tile_01_rot.png -geometry +46,0 -composite \
    ../tiles/tile_01_rot.png -geometry +0+24 -composite \
    ../tiles/tile_01_rot.png -geometry +92+24 -composite \
    ../tiles/tile_01_rot.png -geometry +46+48 -composite \
    mars_image_05_final.png -geometry +0+0 -composite \
    mars_image_05_preview.png

magick \
    -size 184x96 canvas:transparent \
    -stroke red -strokewidth 1 -draw "rectangle 0,0,183,95" \
    ../tiles/tile_01_rot.png -geometry +46,0 -composite \
    ../tiles/tile_01_rot.png -geometry +0+24 -composite \
    ../tiles/tile_01_rot.png -geometry +92+24 -composite \
    ../tiles/tile_01_rot.png -geometry +46+48 -composite \
    mars_image_06_final.png -geometry +0+0 -composite \
    mars_image_06_preview.png

magick \
    -size 184x96 canvas:transparent \
    -stroke red -strokewidth 1 -draw "rectangle 0,0,183,95" \
    ../tiles/tile_01_rot.png -geometry +46,0 -composite \
    ../tiles/tile_01_rot.png -geometry +0+24 -composite \
    ../tiles/tile_01_rot.png -geometry +92+24 -composite \
    ../tiles/tile_01_rot.png -geometry +46+48 -composite \
    mars_image_07_final.png -geometry +0+0 -composite \
    mars_image_07_preview.png

magick \
    -size 184x96 canvas:transparent \
    -stroke red -strokewidth 1 -draw "rectangle 0,0,183,95" \
    ../tiles/tile_01_rot.png -geometry +46,0 -composite \
    ../tiles/tile_01_rot.png -geometry +0+24 -composite \
    ../tiles/tile_01_rot.png -geometry +92+24 -composite \
    ../tiles/tile_01_rot.png -geometry +46+48 -composite \
    mars_image_08_final.png -geometry +0+0 -composite \
    mars_image_08_preview.png

magick \
    -size 184x96 canvas:transparent \
    -stroke red -strokewidth 1 -draw "rectangle 0,0,183,95" \
    ../tiles/tile_01_rot.png -geometry +46,0 -composite \
    ../tiles/tile_01_rot.png -geometry +0+24 -composite \
    ../tiles/tile_01_rot.png -geometry +92+24 -composite \
    ../tiles/tile_01_rot.png -geometry +46+48 -composite \
    mars_image_09_final.png -geometry +0+0 -composite \
    mars_image_09_preview.png

magick \
    -size 184x96 canvas:transparent \
    -stroke red -strokewidth 1 -draw "rectangle 0,0,183,95" \
    ../tiles/tile_01_rot.png -geometry +46,0 -composite \
    ../tiles/tile_01_rot.png -geometry +0+24 -composite \
    ../tiles/tile_01_rot.png -geometry +92+24 -composite \
    ../tiles/tile_01_rot.png -geometry +46+48 -composite \
    mars_image_10_final.png -geometry +0+0 -composite \
    mars_image_10_preview.png

magick \
    -size 184x96 canvas:transparent \
    -stroke red -strokewidth 1 -draw "rectangle 0,0,183,95" \
    ../tiles/tile_01_rot.png -geometry +46,0 -composite \
    ../tiles/tile_01_rot.png -geometry +0+24 -composite \
    ../tiles/tile_01_rot.png -geometry +92+24 -composite \
    ../tiles/tile_01_rot.png -geometry +46+48 -composite \
    mars_image_11_final.png -geometry +0+0 -composite \
    mars_image_11_preview.png  # FIXME: this should be 2x smaller

magick \
    -size 184x96 canvas:transparent \
    -stroke red -strokewidth 1 -draw "rectangle 0,0,183,95" \
    ../tiles/tile_01_rot.png -geometry +46,0 -composite \
    ../tiles/tile_01_rot.png -geometry +0+24 -composite \
    ../tiles/tile_01_rot.png -geometry +92+24 -composite \
    ../tiles/tile_01_rot.png -geometry +46+48 -composite \
    mars_image_12_final.png -geometry +0+0 -composite \
    mars_image_12_preview.png

magick \
    -size 184x96 canvas:transparent \
    -stroke red -strokewidth 1 -draw "rectangle 0,0,183,95" \
    ../tiles/tile_01_rot.png -geometry +46,0 -composite \
    ../tiles/tile_01_rot.png -geometry +0+24 -composite \
    ../tiles/tile_01_rot.png -geometry +92+24 -composite \
    ../tiles/tile_01_rot.png -geometry +46+48 -composite \
    mars_image_13_final.png -geometry +0+0 -composite \
    mars_image_13_preview.png

magick \
    -size 184x96 canvas:transparent \
    -stroke red -strokewidth 1 -draw "rectangle 0,0,183,95" \
    ../tiles/tile_01_rot.png -geometry +46,0 -composite \
    ../tiles/tile_01_rot.png -geometry +0+24 -composite \
    ../tiles/tile_01_rot.png -geometry +92+24 -composite \
    ../tiles/tile_01_rot.png -geometry +46+48 -composite \
    mars_image_14_final.png -geometry +0+0 -composite \
    mars_image_14_preview.png

magick \
    -size 184x96 canvas:transparent \
    -stroke red -strokewidth 1 -draw "rectangle 0,0,183,95" \
    ../tiles/tile_01_rot.png -geometry +46,0 -composite \
    ../tiles/tile_01_rot.png -geometry +0+24 -composite \
    ../tiles/tile_01_rot.png -geometry +92+24 -composite \
    ../tiles/tile_01_rot.png -geometry +46+48 -composite \
    mars_image_15_final.png -geometry +0+0 -composite \
    mars_image_15_preview.png

magick \
    -size 184x96 canvas:transparent \
    -stroke red -strokewidth 1 -draw "rectangle 0,0,183,95" \
    ../tiles/tile_01_rot.png -geometry +46,0 -composite \
    ../tiles/tile_01_rot.png -geometry +0+24 -composite \
    ../tiles/tile_01_rot.png -geometry +92+24 -composite \
    ../tiles/tile_01_rot.png -geometry +46+48 -composite \
    mars_image_16_final.png -geometry +0+0 -composite \
    mars_image_16_preview.png

magick \
    -size 184x96 canvas:transparent \
    -stroke red -strokewidth 1 -draw "rectangle 0,0,183,95" \
    ../tiles/tile_01_rot.png -geometry +46,0 -composite \
    ../tiles/tile_01_rot.png -geometry +0+24 -composite \
    ../tiles/tile_01_rot.png -geometry +92+24 -composite \
    ../tiles/tile_01_rot.png -geometry +46+48 -composite \
    mars_image_17_final.png -geometry +0+0 -composite \
    mars_image_17_preview.png

magick \
    -size 184x96 canvas:transparent \
    -stroke red -strokewidth 1 -draw "rectangle 0,0,183,95" \
    ../tiles/tile_01_rot.png -geometry +46,0 -composite \
    ../tiles/tile_01_rot.png -geometry +0+24 -composite \
    ../tiles/tile_01_rot.png -geometry +92+24 -composite \
    ../tiles/tile_01_rot.png -geometry +46+48 -composite \
    mars_image_18_final.png -geometry +0+0 -composite \
    mars_image_18_preview.png

magick \
    -size 184x96 canvas:transparent \
    -stroke red -strokewidth 1 -draw "rectangle 0,0,183,95" \
    ../tiles/tile_01_rot.png -geometry +46,0 -composite \
    ../tiles/tile_01_rot.png -geometry +0+24 -composite \
    ../tiles/tile_01_rot.png -geometry +92+24 -composite \
    ../tiles/tile_01_rot.png -geometry +46+48 -composite \
    mars_image_19_final.png -geometry +0+0 -composite \
    mars_image_19_preview.png

magick \
    -size 184x96 canvas:transparent \
    -stroke red -strokewidth 1 -draw "rectangle 0,0,183,95" \
    ../tiles/tile_01_rot.png -geometry +46,0 -composite \
    ../tiles/tile_01_rot.png -geometry +0+24 -composite \
    ../tiles/tile_01_rot.png -geometry +92+24 -composite \
    ../tiles/tile_01_rot.png -geometry +46+48 -composite \
    mars_image_20_final.png -geometry +0+0 -composite \
    mars_image_20_preview.png

magick \
    -size 184x96 canvas:transparent \
    -stroke red -strokewidth 1 -draw "rectangle 0,0,183,95" \
    ../tiles/tile_01_rot.png -geometry +46,0 -composite \
    ../tiles/tile_01_rot.png -geometry +0+24 -composite \
    ../tiles/tile_01_rot.png -geometry +92+24 -composite \
    ../tiles/tile_01_rot.png -geometry +46+48 -composite \
    mars_image_21_final.png -geometry +0+0 -composite \
    mars_image_21_preview.png

magick \
    -size 184x96 canvas:transparent \
    -stroke red -strokewidth 1 -draw "rectangle 0,0,183,95" \
    ../tiles/tile_01_rot.png -geometry +46,0 -composite \
    ../tiles/tile_01_rot.png -geometry +0+24 -composite \
    ../tiles/tile_01_rot.png -geometry +92+24 -composite \
    ../tiles/tile_01_rot.png -geometry +46+48 -composite \
    mars_image_22_final.png -geometry +0+0 -composite \
    mars_image_22_preview.png

magick \
    -size 184x96 canvas:transparent \
    -stroke red -strokewidth 1 -draw "rectangle 0,0,183,95" \
    ../tiles/tile_01_rot.png -geometry +46,0 -composite \
    ../tiles/tile_01_rot.png -geometry +0+24 -composite \
    ../tiles/tile_01_rot.png -geometry +92+24 -composite \
    ../tiles/tile_01_rot.png -geometry +46+48 -composite \
    mars_image_23_final.png -geometry +0+0 -composite \
    mars_image_23_preview.png

magick \
    -size 184x96 canvas:transparent \
    -stroke red -strokewidth 1 -draw "rectangle 0,0,183,95" \
    ../tiles/tile_01_rot.png -geometry +46,0 -composite \
    ../tiles/tile_01_rot.png -geometry +0+24 -composite \
    ../tiles/tile_01_rot.png -geometry +92+24 -composite \
    ../tiles/tile_01_rot.png -geometry +46+48 -composite \
    mars_image_24_final.png -geometry +0+0 -composite \
    mars_image_24_preview.png

magick \
    -size 184x96 canvas:transparent \
    -stroke red -strokewidth 1 -draw "rectangle 0,0,183,95" \
    ../tiles/tile_01_rot.png -geometry +46,0 -composite \
    ../tiles/tile_01_rot.png -geometry +0+24 -composite \
    ../tiles/tile_01_rot.png -geometry +92+24 -composite \
    ../tiles/tile_01_rot.png -geometry +46+48 -composite \
    mars_image_25_final.png -geometry +0+0 -composite \
    mars_image_25_preview.png

magick \
    -size 184x96 canvas:transparent \
    -stroke red -strokewidth 1 -draw "rectangle 0,0,183,95" \
    ../tiles/tile_01_rot.png -geometry +46,0 -composite \
    ../tiles/tile_01_rot.png -geometry +0+24 -composite \
    ../tiles/tile_01_rot.png -geometry +92+24 -composite \
    ../tiles/tile_01_rot.png -geometry +46+48 -composite \
    mars_image_26_final.png -geometry +0+0 -composite \
    mars_image_26_preview.png

magick \
    -size 184x96 canvas:transparent \
    -stroke red -strokewidth 1 -draw "rectangle 0,0,183,95" \
    ../tiles/tile_01_rot.png -geometry +46,0 -composite \
    ../tiles/tile_01_rot.png -geometry +0+24 -composite \
    ../tiles/tile_01_rot.png -geometry +92+24 -composite \
    ../tiles/tile_01_rot.png -geometry +46+48 -composite \
    mars_image_27_final.png -geometry +0+0 -composite \
    mars_image_27_preview.png

magick \
    -size 184x96 canvas:transparent \
    -stroke red -strokewidth 1 -draw "rectangle 0,0,183,95" \
    ../tiles/tile_01_rot.png -geometry +46,0 -composite \
    ../tiles/tile_01_rot.png -geometry +0+24 -composite \
    ../tiles/tile_01_rot.png -geometry +92+24 -composite \
    ../tiles/tile_01_rot.png -geometry +46+48 -composite \
    mars_image_28_final.png -geometry +0+0 -composite \
    mars_image_28_preview.png

magick \
    -size 184x96 canvas:transparent \
    -stroke red -strokewidth 1 -draw "rectangle 0,0,183,95" \
    ../tiles/tile_01_rot.png -geometry +46,0 -composite \
    ../tiles/tile_01_rot.png -geometry +0+24 -composite \
    ../tiles/tile_01_rot.png -geometry +92+24 -composite \
    ../tiles/tile_01_rot.png -geometry +46+48 -composite \
    mars_image_29_final.png -geometry +0+0 -composite \
    mars_image_29_preview.png

# create multiple frames, to generate visual interest
cp mars_image_01_final.png mars_image_01_frame_01.png
cp mars_image_02_final.png mars_image_02_frame_01.png

cp mars_image_03_final.png mars_image_03_frame_01.png # 
./hue_shift.py --min 25 --max 75 --dir left --shift  5 mars_image_03_final.png mars_image_03_frame_02.png
./hue_shift.py --min 25 --max 75 --dir left --shift 10 mars_image_03_final.png mars_image_03_frame_03.png

cp mars_image_04_final.png mars_image_04_frame_01.png

cp mars_image_05_final.png mars_image_05_frame_01.png
./hue_shift.py --min 90 --max 180 --dir left --shift 10 mars_image_05_final.png mars_image_05_frame_02.png

cp mars_image_06_final.png mars_image_06_frame_01.png
cp mars_image_07_final.png mars_image_07_frame_01.png
cp mars_image_08_final.png mars_image_08_frame_01.png
cp mars_image_09_final.png mars_image_09_frame_01.png # 
./hue_shift.py --min 25 --max 45 --dir left --shift 10 mars_image_09_final.png mars_image_09_frame_02.png
./hue_shift.py --min 25 --max 45 --dir left --shift 20 mars_image_09_final.png mars_image_09_frame_03.png

cp mars_image_10_final.png mars_image_10_frame_01.png
./hue_shift.py --min 25 --max 45 --dir left --shift 10 mars_image_10_final.png mars_image_10_frame_02.png
./hue_shift.py --min 25 --max 45 --dir left --shift 20 mars_image_10_final.png mars_image_10_frame_03.png

cp mars_image_11_final.png mars_image_11_frame_01.png
cp mars_image_12_final.png mars_image_12_frame_01.png
cp mars_image_13_final.png mars_image_13_frame_01.png # 
./hue_shift.py --min 25 --max 45 --dir left --shift 10 mars_image_13_final.png mars_image_13_frame_02.png
./hue_shift.py --min 25 --max 45 --dir left --shift 20 mars_image_13_final.png mars_image_13_frame_03.png

cp mars_image_14_final.png mars_image_14_frame_01.png # 
./hue_shift.py --min 25 --max 45 --dir left --shift  9 mars_image_14_final.png mars_image_14_frame_02.png

cp mars_image_15_final.png mars_image_15_frame_01.png
./hue_shift.py --min 0 --max 25 --dir right --shift 8 mars_image_15_final.png mars_image_15_frame_02.png
./hue_shift.py --min 0 --max 25 --dir right --shift 15 mars_image_15_final.png mars_image_15_frame_03.png

cp mars_image_16_final.png mars_image_16_frame_01.png
./hue_shift.py --min 90 --max 180 --dir left --shift 180 mars_image_16_final.png mars_image_16_frame_02.png

cp mars_image_17_final.png mars_image_17_frame_01.png
./hue_shift.py --min 90 --max 180 --dir right --shift 6 mars_image_17_final.png mars_image_17_frame_02.png

cp mars_image_18_final.png mars_image_18_frame_01.png

cp mars_image_19_final.png mars_image_19_frame_01.png
magick mars_image_19_final.png -alpha set -virtual-pixel transparent -distort BarrelInverse "0.0 0.0 -0.5 1.5   0.0 0.0 0.3 0.5" /tmp/mars_image_19_flat_01.png
magick mars_image_19_final.png -alpha set -virtual-pixel transparent -distort BarrelInverse "0.0 0.0 -0.5 1.3   0.0 0.0 0.2 0.4" /tmp/mars_image_19_flat_02.png
magick mars_image_19_final.png -alpha set -virtual-pixel transparent -distort BarrelInverse "0.0 0.0 -0.5 1.1   0.0 0.0 0.1 0.3" /tmp/mars_image_19_flat_03.png
magick mars_image_19_final.png -alpha set -virtual-pixel transparent -distort BarrelInverse "0.0 0.0 -0.5 0.9   0.0 0.0 0.1 0.2" /tmp/mars_image_19_flat_04.png
magick -extract 184x126+0+0 /tmp/mars_image_19_flat_01.png /tmp/mars_image_19_flat_chute_01.png
magick -extract 184x117+0+0 /tmp/mars_image_19_flat_02.png /tmp/mars_image_19_flat_chute_02.png
magick -extract 184x117+0+0 /tmp/mars_image_19_flat_03.png /tmp/mars_image_19_flat_chute_03.png
magick -extract 184x113+0+0 /tmp/mars_image_19_flat_04.png /tmp/mars_image_19_flat_chute_04.png
magick -extract 184x73+0+140 mars_image_19_final.png /tmp/mars_image_19_base.png
cp mars_image_19_final.png mars_image_19_frame_02.png
magick -size 184x213 canvas:transparent \
    /tmp/mars_image_19_flat_chute_01.png -geometry  +0+0   -composite \
    /tmp/mars_image_19_base.png          -geometry  +0+140 -composite   mars_image_19_frame_03.png
magick -size 184x213 canvas:transparent \
    /tmp/mars_image_19_flat_chute_02.png -geometry  +0+20  -composite \
    /tmp/mars_image_19_base.png          -geometry  +0+140 -composite   mars_image_19_frame_04.png
magick -size 184x213 canvas:transparent \
    /tmp/mars_image_19_flat_chute_03.png -geometry  +0+40  -composite \
    /tmp/mars_image_19_base.png          -geometry  +0+140 -composite   mars_image_19_frame_05.png
magick -size 184x213 canvas:transparent \
    /tmp/mars_image_19_flat_chute_04.png -geometry  +0+60  -composite \
    /tmp/mars_image_19_base.png          -geometry  +0+140 -composite   mars_image_19_frame_06.png
magick -size 184x213 canvas:transparent \
    /tmp/mars_image_19_base.png          -geometry  +0+140 -composite   mars_image_19_frame_07.png

cp mars_image_20_final.png mars_image_20_frame_01.png
./hue_shift.py --min 60 --max 120 --dir left --shift 35 mars_image_20_final.png mars_image_20_frame_02.png

cp mars_image_21_final.png mars_image_21_frame_01.png

cp mars_image_22_final.png mars_image_22_frame_01.png
./hue_shift.py --min 90 --max 180 --dir right --shift 3 mars_image_22_final.png mars_image_22_frame_02.png

cp mars_image_23_final.png mars_image_23_frame_01.png
cp mars_image_24_final.png mars_image_24_frame_01.png
cp mars_image_25_final.png mars_image_25_frame_01.png
cp mars_image_26_final.png mars_image_26_frame_01.png
cp mars_image_27_final.png mars_image_27_frame_01.png
./hue_shift.py --min 0 --max 45 --dir right --shift 8 mars_image_27_final.png mars_image_27_frame_02.png

cp mars_image_28_final.png mars_image_28_frame_01.png
./hue_shift.py --min 0 --max 45 --dir right --shift 8 mars_image_28_final.png mars_image_28_frame_02.png

cp mars_image_29_final.png mars_image_29_frame_01.png
magick -size 186x96 canvas:transparent \
    mars_image_29_frame_01.png   -geometry  +2+1 -composite  mars_image_29_frame_02.png
magick -size 186x96 canvas:transparent \
    mars_image_29_frame_01.png   -geometry  +6+3 -composite  mars_image_29_frame_03.png
magick -size 186x96 canvas:transparent \
    mars_image_29_frame_01.png   -geometry  +2+5 -composite  mars_image_29_frame_04.png
magick -size 186x96 canvas:transparent \
    mars_image_29_frame_01.png   -geometry  +0+6 -composite  mars_image_29_frame_05.png
magick -size 186x96 canvas:transparent \
    mars_image_29_frame_01.png   -geometry  -2+5 -composite  mars_image_29_frame_06.png
magick -size 186x96 canvas:transparent \
    mars_image_29_frame_01.png   -geometry  -6+3 -composite  mars_image_29_frame_07.png
magick -size 186x96 canvas:transparent \
    mars_image_29_frame_01.png   -geometry  -2+1 -composite  mars_image_29_frame_08.png
