function formatTime(timestamp) {
  const date = new Date(timestamp);
  const now = new Date();

  const diff = now - date;

  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  // Check if the timestamp is from today
  if (days === 0) {
    if (hours === 0) {
      // Less than an hour ago
      if (minutes < 1) {
        return "Just now";
      } else if (minutes === 1) {
        return "1 minute ago";
      } else {
        return `${minutes} minutes ago`;
      }
    } else {
      // Less than 24 hours ago
      return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    }
  }

  // Check if the timestamp is from yesterday
  if (days === 1) {
    return "Yesterday";
  }

  // Format the timestamp as a specific date
  const options = { year: "numeric", month: "short", day: "2-digit" };
  return date.toLocaleDateString("en-US", options);
}

export { formatTime };
