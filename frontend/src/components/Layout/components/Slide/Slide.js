import React from 'react';
import { Link as reactLink } from 'react-router-dom';
// import FishBanner from '~/assets/ornamental-fish.svg';
import fishSlide from '~/assets/Conca.svg';
import { Button, Card, Grid, Link, Row, Spacer, Text } from '@nextui-org/react';

function Slide() {
    return (
        <Grid.Container justify="center" css={{ mt: 4 + 'rem', mb: 4 + 'rem' }}>
            <Grid xs={8}>
                <Card variant="none" borderWeight="none">
                    <Card.Body>
                        <Text
                            size={50}
                            weight="bold"
                            css={{ lh: 1, textGradient: '45deg, $blue600 -20%, $pink600 50%' }}
                        >
                            Cửa hàng bán cá
                        </Text>
                        <Text size={50} weight="bold" css={{ textGradient: '45deg, $blue600 -20%, $pink600 50%' }}>
                            MADAOSIR
                        </Text>
                        <Text size={15} color="black" css={{ m: 0, pr: 18 + 'rem' }}>
                            Tại hạ tuyên bố với một một điều, ăn cơm thì thiếu thịt cũng chẳng sao, nhưng tuyệt đối ăn
                            cơm mà thiếu cá thì các hạ sẽ rất đau khổ, vậy nên chúng tôi cung cấp dịch vụ lẩu cá, cá
                            rán, cá chiên xù, cá hấp, các loại món casex không làm các bạn thất vọng. Hãy tới Cửa hàng
                            của chúng tôi, với nhiều phần quà hấp dẫn và một số mini game thú vị, hấp dẫn tại{' '}
                            <Link as={reactLink} to="/">
                                CON CÁ
                            </Link>
                        </Text>
                        <Spacer y={2} />
                        <Row>
                            <Button shadow color="gradient" css={{ mr: 10 }} auto>
                                Xem thêm
                            </Button>
                            <Link as={reactLink} to="/about">
                                <Button shadow light auto>
                                    Về chúng tôi
                                </Button>
                            </Link>
                        </Row>
                    </Card.Body>
                </Card>
            </Grid>
            <Grid xs={4}>
                <Card.Image src={fishSlide} objectFit="contain" />
            </Grid>
        </Grid.Container>
    );
}

export default Slide;
