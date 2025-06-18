const API_BASE_URL = "http://localhost:10089//wp-json/wp/v2";

export async function fetchPosts() {
  const res = await fetch(`${API_BASE_URL}/posts?_embed`);
  return res.json();
}

export async function fetchResults() {
  const res = await fetch(`${API_BASE_URL}/result?_embed`);
  return res.json();
}

export async function fetchPost(id) {
  const res = await fetch(`${API_BASE_URL}/posts/${id}?_embed`);
  return res.json();
}

export async function fetchResult(id) { 
  const res = await fetch(`${API_BASE_URL}/result/${id}?_embed`);
  return res.json();
}