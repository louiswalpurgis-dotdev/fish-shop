import { Card, Col, Grid, Link, Row, Text, Loading, Button } from '@nextui-org/react';
import { useState, useEffect } from 'react';
import { Link as reactLink } from 'react-router-dom';
import axios from '~/api/axios';
const HOME_URL = '/';

function ProductCard() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios
            .get(HOME_URL)
            .then((results) => {
                setData(results.data);
                setLoading(false);
            })
            .catch((err) => console.log(err));
    }, []);
    const MockItem = ({ image, name, amount, info, price, slug }) => {
        return (
            <Link as={reactLink} to={`/product/${slug}`}>
                {/* <Card css={{ width: '100%', aspectRatio: '1/1', borderRadius: 14 }}>
                    <Card.Image src={image} objectFit="cover" alt={name} />
                    <Card.Body css={{ pt: 10, pb: 10 }}>
                        <Text
                            b
                            size={16}
                            css={{
                                textGradient: '45deg, $blue600 -20%, $pink600 50%',
                            }}
                        >
                            {name}
                        </Text>

                        <Row>
                            <Col>
                                <Text size={14} color="black">
                                    Số lương: {amount}
                                </Text>
                            </Col>
                            <Col>
                                <Text size={14} color="black" css={{ textAlign: 'right' }}>
                                    Giá: {price}
                                </Text>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card> */}
                <Card>
                    <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
                        <Col>
                            <Text
                                span
                                size={12}
                                weight="bold"
                                color="#ffffffAA"
                                css={{ bgBlur: '#ffffff66', py: 5, px: 10, borderRadius: 20 }}
                            >
                                {price} đ
                            </Text>
                            <Text h3 color="#ffffffAA">
                                CATEGORY
                            </Text>
                        </Col>
                    </Card.Header>
                    <Card.Body css={{ p: 0 }}>
                        <Card.Image src={image} width="100%" height="20rem" objectFit="cover" alt={name} />
                    </Card.Body>
                    <Card.Footer
                        isBlurred
                        css={{
                            position: 'absolute',
                            bgBlur: '#ffffff66',
                            borderTop: '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
                            bottom: 0,
                            zIndex: 1,
                        }}
                    >
                        <Col>
                            <Row>
                                <Row>
                                    <Text h6 color="#ffffffAA">
                                        {name}
                                    </Text>
                                </Row>
                                <Row justify="flex-end">
                                    <Button flat auto rounded color="secondary">
                                        <Text
                                            css={{
                                                textGradient: '45deg, $blue600 -20%, $pink600 50%',
                                            }}
                                            size={12}
                                            weight="bold"
                                            transform="uppercase"
                                        >
                                            MUA NGÀY
                                        </Text>
                                    </Button>
                                </Row>
                            </Row>
                            <Text color="#ffffffAA" size={12}>
                                {info}
                            </Text>
                        </Col>
                    </Card.Footer>
                </Card>
            </Link>
        );
    };
    return (
        <Grid.Container gap={2} justify="flex-start">
            {(loading === true && <Loading type="default" size="xl" style={{ margin: 'auto' }} />) ||
                data.map((item) => {
                    return (
                        <Grid xs={6} sm={4} md={3} lg={3} xl={2} key={item.id}>
                            <MockItem
                                image={item.image}
                                name={item.name}
                                amount={item.amount}
                                info={item.info}
                                price={item.price}
                                slug={item.slug}
                            />
                        </Grid>
                    );
                })}
        </Grid.Container>
    );
}

export default ProductCard;
