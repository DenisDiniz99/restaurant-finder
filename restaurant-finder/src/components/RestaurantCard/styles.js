import styled from 'styled-components';
import Text from '../Text';

export const Restaurant = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-top: 5px;
  padding: 16px;
  background-color: #ffffff;
  border-left: 5px solid transparent;
  :hover {
    background-color: #00000021;
    border-left-color: ${(props) => props.theme.colors.primary};
  }
`;

export const RestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RestaurantPhoto = styled.img`
  border-radius: 4px;
  width: 100%;
  max-width: 90px;
  height: 90px;
  object-fit: cover;
  display: ${(props) => (props.imageLoaded ? 'block' : 'none')};
`;

export const Content = styled(Text)`
  margin-top: 5px;
`;
