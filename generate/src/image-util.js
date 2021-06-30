export async function decodeImage(blob) {
  const url = URL.createObjectURL(blob);
  try {
    const image = new Image();
    if (image.decode) {
      image.src = url;
      await image.decode();
    } else {
      await new Promise((resolve, reject) => {
        image.onload = resolve;
        image.onerror = reject;
        image.src = url;
      });
    }
    return image;
  } finally {
    URL.revokeObjectURL(url);
  }
}

export async function uploadImage(blob) {
  const formData = new FormData();
  formData.append("image", blob);

  const res = await fetch("https://api.imgur.com/3/image.json", {
    method: "POST",
    headers: {
      Authorization: "Client-ID f28cb80465f9e25",
    },
    body: formData,
  });

  const json = await res.json();

  if (json.success) {
    return json.data.link;
  } else {
    throw new Error(json.data.error);
  }
}
