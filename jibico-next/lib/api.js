const BASE = 'https://jibicoclub.ir/api'

export async function api(endpoint, data){
  try{
    const res = await fetch(`${BASE}/${endpoint}`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
    return await res.json()
  }catch(e){
    return { ok:false }
  }
}