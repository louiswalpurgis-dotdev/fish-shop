import { Card, Col, Grid, Row, Text } from '@nextui-org/react';
import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import axios from '~/api/axios';
const HOME_URL = '/';

function ProductCard() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
            .get(HOME_URL)
            .then((results) => {
                setData(results.data);
            })
            .catch((err) => console.log(err));
    }, []);
    const MockItem = ({ image, name, amount, info, price }) => {
        return (
            // <Card css={{ $$cardColor: '$colors$primary' }}>
            //     <Card.Body>
            //         <Row justify="center" align="center">
            //             <Image objectFit="cover" src={image}></Image>
            //         </Row>
            //         <Row>
            //             <Text h4 size={20} css={{ m: 0 }}>
            //                 {name}
            //             </Text>
            //             <Text h4 size={20} css={{ m: 0 }}>
            //                 {amount}
            //             </Text>
            //         </Row>
            //         <Row>
            //             <Text h4 size={20} css={{ m: 0 }}>
            //                 {info}
            //             </Text>
            //         </Row>
            //         <Row>
            //             <Text h4 size={20} css={{ m: 0 }}>
            //                 {price}
            //             </Text>
            //         </Row>
            //     </Card.Body>
            // </Card>
            <Card variant="none" borderWeight="none">
                <Card.Body css={{ p: 0 }}>
                    <Card.Image
                        src={image}
                        width="100%"
                        height="200px"
                        objectFit="none"
                        css={{ borderRadius: 14 }}
                        alt={name}
                    />
                    <Row css={{ pt: 10, pb: 10 }}>
                        <Col>
                            <Text
                                b
                                size={16}
                                css={{
                                    textGradient: '45deg, $blue600 -20%, $pink600 50%',
                                }}
                            >
                                {name}
                            </Text>
                            <Text size={14} color="black" className="truncate line-clamp-3">
                                {info}
                            </Text>
                            <Row>
                                <Col>
                                    <Text size={14} color="black">
                                        Số lương: {amount}
                                    </Text>
                                </Col>

                                <Col>
                                    <Text size={14} color="black" css={{ textAlign: 'right' }}>
                                        Số lương: {price}
                                    </Text>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        );
    };
    return (
        <Grid.Container gap={2} justify="center">
            {data.map((item) => {
                return (
                    <Grid xs={6} sm={4} md={3} lg={3} xl={2} key={item.id}>
                        <MockItem
                            image={item.image}
                            name={item.name}
                            amount={item.amount}
                            info={item.info}
                            price={item.price}
                        />
                    </Grid>
                );
            })}
        </Grid.Container>
    );
}

export default ProductCard;
