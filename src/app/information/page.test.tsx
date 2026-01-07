import { render, screen } from '@testing-library/react';
import InformationPage from './page';

describe('InformationPage', () => {
    it('renders the main heading', () => {
        render(<InformationPage />);

        // Check for the main heading
        const heading = screen.getByRole('heading', { level: 1, name: /Information/i });
        expect(heading).toBeInTheDocument();
    });

    it('renders the description text', () => {
        render(<InformationPage />);

        // Check for specific text content
        expect(screen.getByText(/Everything you need to know about our platform/i)).toBeInTheDocument();
    });

    it('renders the About Us section', () => {
        render(<InformationPage />);

        expect(screen.getByText('About Us')).toBeInTheDocument();
        expect(screen.getByText(/We are dedicated to providing/i)).toBeInTheDocument();
    });
});
