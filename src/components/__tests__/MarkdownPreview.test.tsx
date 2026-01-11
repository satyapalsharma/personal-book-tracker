import React from 'react';
import { render, screen } from '@testing-library/react';
import MarkdownPreview from '../MarkdownPreview';

describe('MarkdownPreview', () => {
  it('renders textarea and preview', () => {
    render(<MarkdownPreview />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toBeInTheDocument();
    const preview = screen.getByTestId('preview');
    expect(preview).toBeInTheDocument();
  });
});
