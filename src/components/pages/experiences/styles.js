import styled from 'styled-components';

export const Container = styled.div`
    background: #E4E4E4;
    padding: 30px;
    .vertical-timeline-element-title, .vertical-timeline-element-subtitle {
        display: flex;
        align-items: center;
    }
    p {
        margin: 0;
    }

    h1 {
      display: flex;
      justify-content: center;
    }

    h2 {
        cursor: pointer;
        :hover {
            opacity: 0.8;
        }
    }
`;
