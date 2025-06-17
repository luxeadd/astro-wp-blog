const API_BASE_URL = "http://taiyou-kiso.local/wp-json/wp/v2";

export async function fetchPosts() {
  const res = await fetch(`${API_BASE_URL}/posts?_embed`);
  return res.json();
}

export async function fetchPost(id: string) {
  const res = await fetch(`${API_BASE_URL}/posts/${id}?_embed`);
  return res.json();
} 