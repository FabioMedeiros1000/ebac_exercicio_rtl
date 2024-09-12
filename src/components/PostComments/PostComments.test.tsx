import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve adicionar dois comentários', () => {
        render(<PostComment />);

        fireEvent.change(screen.getByTestId('input-comentario'), { target: { value: 'opa' } });
        fireEvent.click(screen.getByTestId('btn-comentar'));

        expect(screen.getByText('opa')).toBeInTheDocument();

        fireEvent.change(screen.getByTestId('input-comentario'), { target: { value: 'testando' } });
        fireEvent.click(screen.getByTestId('btn-comentar'));

        expect(screen.getByText('testando')).toBeInTheDocument();
    })
});