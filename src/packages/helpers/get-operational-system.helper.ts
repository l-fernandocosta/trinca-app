export type OSMap = "Mac OS" | "iOS" | "Windows" | "Android";

export function getOS(userAgent: string): OSMap | null {
  const macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"];
  const windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"];
  let os = null;

  if (userAgent.includes("Mac")) {
    os = "Mac OS";
  } else if (userAgent.includes("Windows")) {
    os = "Windows";
  } 

  return os as OSMap;
}
