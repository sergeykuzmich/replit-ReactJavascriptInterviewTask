import { useEffect, useState } from 'react';

export default function Placeholder(props) {
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState(false);

  useEffect(() => {
    getImage(props.category);
  }, [])

  const getImage = (category) => {
    fetch('https://source.unsplash.com/random/450x300?' + category)
      .then(res => {
        setLoading(false);
        setImage(res.url);
      })
      .catch(error => alert(error));
  }

  return <img
    src={loading ? '/loading.gif' : image}
    alt="Unspash"
    onClick={() => getImage(props.category)}
  />;
}
