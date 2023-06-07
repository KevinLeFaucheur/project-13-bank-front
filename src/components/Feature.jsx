import styled from 'styled-components'

const FeatureItem = styled.div`
  .feature-icon {
    width: 100px;
    border: 10px solid #00bc77;
    border-radius: 50%;
    padding: 1rem;
  }

  flex: 1;
  padding: 2.5rem;

  .feature-item-title {
    color: #222;
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
`

export const Feature = ({ feature }) => {
  const { icon, title, text } = feature;

  return (
    <FeatureItem>
      <img src={icon} alt="Chat Icon" className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{text}</p>
    </FeatureItem>
  )
}
