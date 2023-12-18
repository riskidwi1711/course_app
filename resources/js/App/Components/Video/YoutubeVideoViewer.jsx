const YOUTUBE_PLAYLIST_ITEMS_API =
    "https://www.googleapis.com/youtube/v3/videos";

export async function getServerSideProps(videoId) {
    const res = await fetch(
        `${YOUTUBE_PLAYLIST_ITEMS_API}?key=AIzaSyAbDopbr0uIcZeROZwyzNtyOKHEg-X1rAk&id=${videoId}&part=snippet,contentDetails,statistics`
    );
    const data = await res.json();
    return data;
}
