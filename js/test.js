var image_from_ajax = new Image();
image_from_ajax.src = fetch_image_from_ajax(); // Downloaded via ajax call?

image_from_ajax = rescaleImage(image_from_ajax);

// Rescale the given image to a max of max_height and max_width
function rescaleImage(image_name)
{
    var max_height = 100;
    var max_width = 100;

    var height = image_name.height;
    var width = image_name.width;
    var ratio = height/width;

    // If height or width are too large, they need to be scaled down
    // Multiply height and width by the same value to keep ratio constant
    if(height > max_height)
    {
        ratio = max_height / height;
        height = height * ratio;
        width = width * ratio;
    }

    if(width > max_width)
    {
        ratio = max_width / width;
        height = height * ratio;
        width = width * ratio;
    }

    image_name.width = width;
    image_name.height = height;
    return image_name;
}