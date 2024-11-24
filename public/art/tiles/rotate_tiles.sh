#!/bin/bash

magick tile_01.png -background transparent -rotate 45 -scale 92x48\! tile_01_rot.png
magick tile_02.png -background transparent -rotate 45 -scale 92x48\! tile_02_rot.png
magick tile_03.png -background transparent -rotate 45 -scale 92x48\! tile_03_rot.png
magick tile_04.png -background transparent -rotate 45 -scale 92x48\! tile_04_rot.png

magick -extract 259x259+0+0  landing_pad_full.png landing_pad_top_left.png
magick -extract 259x259+259+0  landing_pad_full.png landing_pad_top_right.png
magick -extract 259x259+259+259  landing_pad_full.png landing_pad_bottom_right.png
magick -extract 259x259+0+259  landing_pad_full.png landing_pad_bottom_left.png

magick landing_pad_top_left.png -background transparent -rotate 45 -scale 92x48\! landing_pad_t_l_rot.png
magick landing_pad_top_right.png -background transparent -rotate 45 -scale 92x48\! landing_pad_t_r_rot.png
magick landing_pad_bottom_right.png -background transparent -rotate 45 -scale 92x48\! landing_pad_b_r_rot.png
magick landing_pad_bottom_left.png -background transparent -rotate 45 -scale 92x48\! landing_pad_b_l_rot.png
