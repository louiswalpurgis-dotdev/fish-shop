import { Card, Col, Grid, Link, Row, Text, Loading } from '@nextui-org/react';
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
                <Link as={reactLink} to={`/product/${slug}`}>
                    <Card.Body>
                        <Card.Image
                            src={image}
                            width="100%"
                            height="200px"
                            objectFit="cover"
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
                                            Giá: {price}
                                        </Text>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Card.Body>
                </Link>
            </Card>
        );
    };
    return (
        <Grid.Container gap={2} justify="flex-start">
            {(loading == true && <Loading type="default" size="xl" style={{ margin: 'auto' }} />) ||
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
