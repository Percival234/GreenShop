export default function validateImage(file) {
  if (!file) return false;

  const allowedFormats = ['image/jpeg', 'image/jpg'];
  const maxFileSize = 2 * 1024 * 1024;

  if (!allowedFormats.includes(file.type)) {
    return 'Invalid file format. Please upload a JPEG or JPG image.';
  }

  if (file.size > maxFileSize) {
    return 'File size exceeds the limit of 2 MB.';
  }

  return true;
}
