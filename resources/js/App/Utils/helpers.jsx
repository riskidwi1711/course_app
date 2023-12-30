export function getYouTubeVideoId(url) {
    // Example YouTube URLs:
    // - https://www.youtube.com/watch?v=abc123
    // - https://youtu.be/abc123
    // - https://www.youtube.com/embed/abc123

    // Regular expression to match YouTube video IDs
    const regex =
        /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);

    // If there's a match, return the video ID; otherwise, return null
    return match ? match[1] : null;
}

export const BytesToMBConverter = (sizeInBytes) => {
    const convertBytesToMB = (bytes) => {
        return (bytes / (1024 * 1024)).toFixed(2);
    };

    const sizeInMB = convertBytesToMB(sizeInBytes);
    return sizeInMB;
};

export const fileTypeIcons = {
    "application/pdf": "far fa-file-pdf",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        "far fa-file-word",
    "application/msword": "far fa-file-word",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
        "far fa-file-excel",
    "application/vnd.ms-excel": "far fa-file-excel",
    "video/mp4": "far fa-file-video",
    "video/x-msvideo": "far fa-file-video",
    "video/x-matroska": "far fa-file-video",
    "image/jpeg": "far fa-file-image",
    "image/png": "far fa-file-image",
    "image/gif": "far fa-file-image",
    "text/plain": "far fa-file-alt",
    "text/html": "far fa-file-code",
    "application/json": "far fa-file-code",
    unknown: "far fa-file",
};

export const formatRupiah = (amount) => {
    const formattedAmount = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount);

    return formattedAmount;
};

export const formatPersentase = (number) => {
    return number ? number.toString() + '%' : 0+'%'
};

export function generateRandomString(length) {
    const characters =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let randomString = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomString += characters.charAt(randomIndex);
    }

    return randomString;
}

export function calculateTimeDifference(startDate, endDate) {
    const startDateTime = new Date(startDate).getTime();
    const endDateTime = new Date(endDate).getTime();

    const timeDifferenceInMilliseconds = endDateTime - startDateTime;

    // Menggunakan Math.round() untuk membulatkan ke nilai terdekat
    const timeDifferenceInMinutes = Math.floor(
        timeDifferenceInMilliseconds / (1000 * 60)
    );

    return timeDifferenceInMinutes;
}

export const literals = {
    1: "A",
    2: "B",
    3: "C",
    4: "D",
    null: "Tidak Mengisi",
};


export function validateObject(obj, keysToCheck) {
    for (const key of keysToCheck) {
      const value = obj[key];
  
      if (value === null || value === undefined || value === '') {
        return false;
      }
    }
  
    return true;
  }