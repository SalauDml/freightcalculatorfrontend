# TODO List - Freight Calculator

## High Priority

### Backend Integration
- [ ] Set up API endpoints for rate calculations
- [ ] Implement form submission handlers
- [ ] Connect to backend service for freight rate data
- [ ] Add authentication/user management system

### Form Validation
- [ ] Add validation for Step 2 form fields (email, phone, name)
- [ ] Validate vehicle type selectionendes
- [ ] Validate cost calculator inputs (Step 3)
- [ ] Add validation for Rate Calculator location inputs
- [ ] Display validation error messages to users

### State Management
- [ ] Consider implementing proper state management (Context API or Zustand)
- [ ] Persist user data across steps (localStorage or session storage)
- [ ] Save rate calculator searches for the "0/5" search limit feature
- [ ] Implement data persistence between page refreshes

## Medium Priority

### Complete Missing Features
- [ ] Finish Step 4 component implementation
- [ ] Finish Step 5 component implementation
- [ ] Implement "Searches Used: 0/5" limit enforcement in Rate Calculator
- [ ] Add equipment selection options to Rate Calculator location stage
- [ ] Complete Rate Calculator Load Details stage
- [ ] Complete Rate Calculator Service stage
- [ ] Complete Rate Calculator Conditions stage

### User Experience
- [ ] Add loading states for async operations
- [ ] Implement better error handling and user feedback
- [ ] Add confirmation dialogs for navigation away from forms
- [ ] Improve mobile responsiveness
- [ ] Add keyboard navigation support

### Rate Calculator
- [ ] Implement actual rate calculation logic
- [ ] Add location autocomplete for origin/destination
- [ ] Integrate "Use My Location" functionality
- [ ] Calculate deadhead miles automatically
- [ ] Display calculated rates with breakdown

## Low Priority

### Code Quality
- [ ] Add TypeScript for better type safety
- [ ] Extract magic numbers to constants
- [ ] Create reusable form component library
- [ ] Add PropTypes or TypeScript interfaces
- [ ] Refactor conditional rendering in page.js to use router
- [ ] Split large components into smaller, reusable pieces

### Testing
- [ ] Set up testing framework (Jest + React Testing Library)
- [ ] Write unit tests for components
- [ ] Add integration tests for multi-step flow
- [ ] Test form validation logic

### Accessibility
- [ ] Add proper ARIA labels to form inputs
- [ ] Ensure keyboard navigation works throughout
- [ ] Add focus management for step transitions
- [ ] Test with screen readers
- [ ] Improve color contrast ratios

### Documentation
- [ ] Add JSDoc comments to components
- [ ] Document API integration points
- [ ] Create user guide/help documentation
- [ ] Add inline comments for complex logic

## Future Enhancements

- [ ] Add ability to save and load previous calculations
- [ ] Export rate calculations as PDF
- [ ] Add comparison feature for multiple routes
- [ ] Implement user dashboard with history
- [ ] Add real-time fuel price integration
- [ ] Multi-language support
- [ ] Dark mode support
- [ ] Analytics and tracking

## Bugs to Fix

- [ ] Progress bar doesn't accurately reflect actual completion
- [ ] Back button navigation doesn't restore previous form data
- [ ] Step 3 cost calculation display shows hardcoded values
- [ ] Form submission uses onClick instead of onSubmit

## Notes

- Currently on `RateCalc` branch - consider merging to main when ready
- Review and update metadata in app/layout.js (still shows default "Create Next App")
- Consider API rate limiting strategy before implementing search limit
