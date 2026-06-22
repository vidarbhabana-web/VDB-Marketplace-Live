import { useState } from 'react';

export default function Home() {
  const [data, setData] = useState({ shop: '', owner: '', mobile: '', category: '', address: '', pincode: '' });

  const submit = (e) => {
    e.preventDefault();
    alert('जय स्वामी समर्थ! तुमची नोंदणी झाली. 24 तासात कॉल येईल.');
  };

  const style = { display: 'block', margin: '10px 0', padding: '12px', width: '90%', maxWidth: '400px', border: '1px solid #ddd', borderRadius: '5px' };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h1 style={{ color: '#FF5722' }}>VDB Marketplace 🚩</h1>
      <h2>विदर्भातील दुकानदारांसाठी मोफत नोंदणी</h2>
      <form onSubmit={submit} style={{ display: 'inline-block', textAlign: 'left' }}>
        <input placeholder="दुकानाचे नाव *" required style={style} onChange={e => setData({...data, shop: e.target.value})} />
        <input placeholder="मालकाचे नाव *" required style={style} onChange={e => setData({...data, owner: e.target.value})} />
        <input placeholder="मोबाइल नंबर *" required type="tel" style={style} onChange={e => setData({...data, mobile: e.target.value})} />
        <input placeholder="व्यवसाय प्रकार *" required style={style} onChange={e => setData({...data, category: e.target.value})} />
        <textarea placeholder="पूर्ण पत्ता *" required style={style} onChange={e => setData({...data, address: e.target.value})} />
        <input placeholder="पिन कोड *" required style={style} onChange={e => setData({...data, pincode: e.target.value})} />
        <button type="submit" style={{ ...style, background: '#FF5722', color: 'white', fontWeight: 'bold', border: 'none' }}>नोंदणी करा</button>
      </form>
      <p style={{ marginTop: '30px', color: '#555' }}>Vidarbha Digital Hub</p>
    </div>
  );
}
