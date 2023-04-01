import { Modal, useModal, Button, Text, Input, Link } from '@nextui-org/react';
import { MagnifyingGlassCircleIcon } from '@heroicons/react/24/outline';
import { useEffect, useState, Link as reactLink } from 'react';
import { NavLink } from 'react-router-dom';
import axios from '~/api/axios';

export default function Search() {
    const { setVisible, bindings } = useModal();
    const GET_PRODUCT_URL = '/';
    const [products, setProducts] = useState([]);
    const [query, setQuery] = useState('');
    const [state, setState] = useState({
        query: '',
        list: [],
    });

    const handleChange = (e) => {
        const results = products.filter((product) => {
            if (e.target.value === '') return products;
            return product.name.toLowerCase().includes(e.target.value.toLowerCase());
        });

        setQuery(e.target.value);
        setState({
            query: e.target.value,
            list: results,
        });
    };

    useEffect(() => {
        axios.get(GET_PRODUCT_URL).then((response) => {
            setProducts(response.data);
        });
    }, []);
    return (
        <div>
            <Button light auto onPress={() => setVisible(true)}>
                <MagnifyingGlassCircleIcon style={{ width: 2 + 'em', height: 2 + 'em', color: 'black' }} />
            </Button>
            <Modal
                scroll
                width="600px"
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                {...bindings}
            >
                <Modal.Header>
                    <Input clearable bordered placeholder="Tìm kiếm" value={query} onChange={handleChange} />
                </Modal.Header>
                <Modal.Body>
                    {state.query === ''
                        ? ''
                        : state.list.map((item) => {
                              return (
                                  <NavLink
                                      key={item.id}
                                      to={`/product/${item.slug}`}
                                      onClick={() => {
                                          setState({
                                              query: '',
                                              list: products,
                                          });
                                          setQuery('');
                                          setVisible(false);
                                      }}
                                  >
                                      <Text>{item.name}</Text>
                                  </NavLink>
                              );
                          })}
                </Modal.Body>
            </Modal>
        </div>
    );
}
