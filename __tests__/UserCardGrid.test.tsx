// __tests__/UserCardGrid.test.tsx
import UserCardGrid from '@/components/UserCardGrid';
import { users } from '@/components/users';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

jest.mock('@/components/UserCard', () => ({
  UserCard: ({ user }: any) => <div data-testid="user-card">{user.name}</div>,
}));

describe('UserCardGrid', () => {
  it('renders all user cards', () => {
    render(<UserCardGrid />);
    users.forEach((user) => {
      expect(screen.getByText(user.name)).toBeInTheDocument();
    });
    expect(screen.getAllByTestId('user-card').length).toBe(users.length);
  });
});
