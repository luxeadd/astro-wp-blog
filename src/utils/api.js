const API_BASE_URL = "http://localhost:10089/wp-json/wp/v2";

// 投稿一覧を取得
export async function fetchPosts() {
  const res = await fetch(`${API_BASE_URL}/posts?_embed`);
  return res.json();
}

// カスタム投稿result一覧を取得
export async function fetchResults() {
  const res = await fetch(`${API_BASE_URL}/result?_embed`);
  return res.json();
}

// 投稿各記事を取得
export async function fetchPost(id) {
  const res = await fetch(`${API_BASE_URL}/posts/${id}?_embed`);
  return res.json();
}

// カスタム投稿result各記事を取得
export async function fetchResult(id) { 
  const res = await fetch(`${API_BASE_URL}/result/${id}?_embed`);
  return res.json();
}