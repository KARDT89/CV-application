import { convertToPDFBlob } from "./downloadResume";

export const handleShare = async () => {
  try {
    const blob = await convertToPDFBlob("resume");
    const file = new File([blob], "resume.pdf", { type: "application/pdf" });

    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      await navigator.share({
        title: "My Resume",
        text: "Check out my resume!",
        files: [file],
      });
    } else {
      alert("Sharing files is not supported on your device/browser.");
    }
  } catch (error) {
    console.error("Sharing failed:", error);
  }
};
