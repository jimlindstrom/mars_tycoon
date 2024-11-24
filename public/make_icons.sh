mv ~/Downloads/movement_8238838.png movement.png
mv ~/Downloads/construction-tools_12534730.png construction_tools.png
mv movement.png movement_black.png
mv construction_tools.png construction_tools_black.png
magick construction_tools_black.png -fill '#0008' -opaque white -fill white   -opaque black -fill black   -opaque '#0008'  construction_tools.png
magick movement_black.png -fill '#0008' -opaque white -fill white   -opaque black -fill black   -opaque '#0008'  movement.png

