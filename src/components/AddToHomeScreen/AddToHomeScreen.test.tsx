import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import AddToHomeScreenModal from './AddToHomeScreenModal';

describe('Add To Home Screen Modal', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  it('renders iOS version', () => {
    // Arrange
    const closePrompMock = jest.fn();
    render(
      <AddToHomeScreenModal
        isIOS={true}
        isOpen={true}
        closePrompt={closePrompMock}
      />,
    );

    // Action
    const iOSText = screen.getByText('Add to Home Screen');

    // Assert
    expect(iOSText).toBeInTheDocument();
  });

  it('renders android version', () => {
    // Arrange
    const closePrompMock = jest.fn();
    render(
      <AddToHomeScreenModal
        isIOS={false}
        isOpen={true}
        closePrompt={closePrompMock}
      />,
    );

    // Action
    const andriodText = screen.getByText('Install application');

    // Assert
    expect(andriodText).toBeInTheDocument();
  });

  it('close modal action', () => {
    // Arrange
    const closePrompMock = jest.fn();
    render(
      <AddToHomeScreenModal
        isIOS={true}
        isOpen={true}
        closePrompt={closePrompMock}
      />,
    );

    // Action

    // Assert
  });
});
