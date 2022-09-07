@pa_st_only @customers @customer360 @notes @GIMLET @1.4release
Feature: Customer 360 View - NOTES Tab - View/Add/Edit/Delete Notes

	@sanity
	Scenario: Verify NOTES tab defaults
		Given User is on 'CUSTOMERS' Facet
		When User Opens Customer 360 View
		And User clicks on 'NOTES' tab
		Then Verify NOTES tab defaults

	@sanity
	Scenario: Verify that the user is able to toggle 360 view
		When User Opens Customer 360 View
		And User clicks on 'NOTES' tab
		And Toggle 360 view
		Then Verify NOTES tab defaults
		And Toggle 360 view

	Scenario: Verify that no error message is displayed when user puts cursor on Add Note text area and tab out
		Given User Opens Customer 360 View
		And User clicks on 'NOTES' tab
		When User puts cursor on Add Note text area and tab out
		Then No error message is displayed

	@sanity
	Scenario: Verify that the user is able to add a new note with minimum allowed characters
		When User Opens Customer 360 View
		And User clicks on 'NOTES' tab
		And User captures note with content 'abc'
		Then First note should be with content 'abc'

	@sanity
	Scenario: Verify that the user is able to add a new note with valid content
		When User Opens Customer 360 View
		And User clicks on 'NOTES' tab
		And User captures note with content 'this is a test note'
		Then First note should be with content 'this is a test note'

	Scenario: Verify that the user is able to add a new note with lines
		When User Opens Customer 360 View
		And User clicks on 'NOTES' tab
		And User captures note with content 'this note contains lines\n\nthis note contains lines\n\nthis note contains lines'
		Then First note should be with content 'this note contains lines\n\nthis note contains lines\n\nthis note contains lines'

	Scenario: Verify that the user is able to add a new note with max allowed characters
		When User Opens Customer 360 View
		And User clicks on 'NOTES' tab
		And User captures note with content 'This note contains 520 characters, hence allowed. This note contains 520 characters, hence allowed. This note contains 520 characters, hence allowed. This note contains 520 characters, hence allowed. This note contains 520 characters, hence allowed. This note contains 520 characters, hence allowed. This note contains 520 characters, hence allowed. This note contains 520 characters, hence allowed. This note contains 520 characters, hence allowed. This note contains 520 characters, hence allowed. This is a test note.'
		Then First note should be with content 'This note contains 520 characters, hence allowed. This note contains 520 characters, hence allowed. This note contains 520 characters, hence allowed. This note contains 520 characters, hence allowed. This note contains 520 characters, hence allowed. This note contains 520 characters, hence allowed. This note contains 520 characters, hence allowed. This note contains 520 characters, hence allowed. This note contains 520 characters, hence allowed. This note contains 520 characters, hence allowed. This is a test note.'

	Scenario: Verify that the user is able to move the cursor inside the notes textarea
		When User Opens Customer 360 View
		And User clicks on 'NOTES' tab
		And User captures note with content 'is a test {leftarrow}{rightarrow}{movetostart}this {movetoend}note'
		Then First note should be with content 'this is a test note'

	Scenario: Verify that the user is able to add a new note with allowed special characters
		When User Opens Customer 360 View
		And User clicks on 'NOTES' tab
		And User captures note with content '~^!#$%&()*"+,\'-./:;?@_{}|[]\\='
		Then First note should be with content '~^!#$%&()*"+,\'-./:;?@_{}|[]\\='

	@sanity
	Scenario: Verify added note - Date of Note, Edit/Delete options
		When User Opens Customer 360 View
		And User clicks on 'NOTES' tab
		And User captures note with content 'abc'
		Then First note should be with content 'abc'
		And Add Note button should be disabled
		And Date of note should be current date
		And Note should have more options
		And More options should have edit delete options

	@sanity
	Scenario: Verify that the user is be able to scroll down to view more notes
		When User Opens Customer 360 View
		When User clicks on 'NOTES' tab
		Then User should be able to scroll down

	@sanity
	Scenario: Verify that the NOTES tab is refreshed when switching among customers, while in 360 view
		When User Opens Customer 360 View
		And User clicks on 'NOTES' tab
		And User captures note with content 'graphic'
		Then First note should be with content 'graphic'
		When User Opens 360 View For Another Customer
		And User captures note with content 'fedex'
		Then First note should be with content 'fedex'
		When User Opens Customer 360 View
		Then First note should be with content 'graphic'
		When User Opens 360 View For Another Customer
		Then First note should be with content 'fedex'

	Scenario: Verify that user is not allowed to add notes with only spaces
		When User Opens Customer 360 View
		And User clicks on 'NOTES' tab
		When User tries to add note with invalid content '   '
		Then Note should have error message 'Note is required.'

	Scenario: Verify that user is not allowed to add notes with only new lines
		Given User is on 'CUSTOMERS' Facet
		When User Opens Customer 360 View
		And User clicks on 'NOTES' tab
		When User tries to add note with only new lines
		Then Note should have error message 'Note is required.'

	@sanity
	Scenario: Verify that user is not allowed to add notes with only two characters
		When User Opens Customer 360 View
		And User clicks on 'NOTES' tab
		When User tries to add note with invalid content 'no'
		Then Note should have error message 'The note must be longer than 3 characters.'

	@sanity
	Scenario: Verify that user is not allowed to add notes with more than 520 characters
		When User Opens Customer 360 View
		And User clicks on 'NOTES' tab
		When User tries to add note with invalid content 'This note contains more than 520 characters, hence not allowed. This note contains more than 520 characters, hence not allowed. This note contains more than 520 characters, hence not allowed. This note contains more than 520 characters, hence not allowed. This note contains more than 520 characters, hence not allowed. This note contains more than 520 characters, hence not allowed. This note contains more than 520 characters, hence not allowed. This note contains more than 520 characters, hence not allowed. This note contains more than 520 characters, hence not allowed.'
		Then Note should have error message 'The note must be less than 520 characters.'

	@sanity
	Scenario: Verify that the user is not allowed to add note with html tags
		When User Opens Customer 360 View
		And User clicks on 'NOTES' tab
		And User tries to add note with invalid content '<div>'
		Then Note should have error message 'Invalid input'

	Scenario: Verify that the user is able to cancel editing the note
		When User Opens Customer 360 View
		And User clicks on 'NOTES' tab
		And User captures note with content 'test edit cancel'
		And First note should be with content 'test edit cancel'
		Then User should be able to cancel editing the note

	Scenario: Verify that the user is able to cancel editing the note in expanded 360 view
		When User Opens Customer 360 View
		And User clicks on 'NOTES' tab
		And Toggle 360 view
		And User captures note with content 'test edit cancel - expanded 360 view'
		And First note should be with content 'test edit cancel - expanded 360 view'
		Then User should be able to cancel editing the note

	Scenario: Verify that the user is not allowed to edit note with only two characters
		When User Opens Customer 360 View
		And User clicks on 'NOTES' tab
		And User tries to edit note with invalid content 'no'
		Then Note should have error message 'The note must be longer than 3 characters.'

	Scenario: Verify that the user is not allowed to edit note with more than 520 characters
		When User Opens Customer 360 View
		And User clicks on 'NOTES' tab
		And User tries to edit note with invalid content 'This note contains more than 520 characters, hence not allowed. This note contains more than 520 characters, hence not allowed. This note contains more than 520 characters, hence not allowed. This note contains more than 520 characters, hence not allowed. This note contains more than 520 characters, hence not allowed. This note contains more than 520 characters, hence not allowed. This note contains more than 520 characters, hence not allowed. This note contains more than 520 characters, hence not allowed. This note contains more than 520 characters, hence not allowed.'
		Then Note should have error message 'The note must be less than 520 characters.'

	Scenario: Verify that the user is not allowed to edit note with only spaces
		When User Opens Customer 360 View
		And User clicks on 'NOTES' tab
		And User tries to edit note with invalid content '   '
		Then Note should have error message 'Note is required.'

	Scenario: Verify that the user is not allowed to edit note with only new lines
		When User Opens Customer 360 View
		And User clicks on 'NOTES' tab
		And User tries to edit note with only new lines
		Then Note should have error message 'Note is required.'

	Scenario: Verify that the user is not allowed to edit note with html tags
		When User Opens Customer 360 View
		And User clicks on 'NOTES' tab
		And User tries to edit note with invalid content '<img>'
		Then Note should have error message 'Invalid input'

	Scenario: Verify that the user is allowed to edit note with valid content
		When User Opens Customer 360 View
		And User clicks on 'NOTES' tab
		And User edits the note with content 'notes 1 edited'
		Then First note should be with content 'notes 1 edited'

	Scenario: Verify that the user is allowed to edit note with allowed special characters
		When User Opens Customer 360 View
		And User clicks on 'NOTES' tab
		And User edits the note with content '~^!#$%&()*"+,\'-./:;?@_{}|[]\\='
		Then First note should be with content '~^!#$%&()*"+,\'-./:;?@_{}|[]\\='

	Scenario: Verify that the user is allowed to edit note with valid content in expanded 360 view
		When User Opens Customer 360 View
		And User clicks on 'NOTES' tab
		And Toggle 360 view
		And User edits the note with content 'notes 1 edited'
		Then First note should be with content 'notes 1 edited'

	Scenario: Verify that the user is able to move the cursor inside the notes textarea while editing
		When User Opens Customer 360 View
		And User clicks on 'NOTES' tab
		And User edits the note with content 'is a test {leftarrow}{rightarrow}{movetostart}this {movetoend}note'
		Then First note should be with content 'this is a test note'

	Scenario: Verify that the user is allowed to edit note with new lines
		When User Opens Customer 360 View
		And User clicks on 'NOTES' tab
		And User edits the note with content 'this note contains lines\n\nthis note contains lines\n\nthis note contains lines'
		Then First note should be with content 'this note contains lines\n\nthis note contains lines\n\nthis note contains lines'

	Scenario: Verify that the user is able to cancel deleting the note
		When User Opens Customer 360 View
		And User clicks on 'NOTES' tab
		And User captures note with content 'abc'
		Then First note should be with content 'abc'
		And User should be able to cancel deleting the note
		And First note should be with content 'abc'

	Scenario: Verify that the user is able to cancel deleting the note in expanded 360 view
		When User Opens Customer 360 View
		And User clicks on 'NOTES' tab
		And Toggle 360 view
		And User captures note with content 'abc'
		Then First note should be with content 'abc'
		And User should be able to cancel deleting the note
		And First note should be with content 'abc'

	Scenario: Verify that the user is able to delete the note
		When User Opens Customer 360 View
		And User clicks on 'NOTES' tab
		And Toggle 360 view
		And User captures note with content 'abc'
		Then First note should be with content 'abc'
		And User captures note with content 'xyz'
		Then First note should be with content 'xyz'
		And User deletes the note
		And First note should be with content 'abc'

	Scenario: Verify that the user is able to delete the note in expanded 360 view
		When User Opens Customer 360 View
		And User clicks on 'NOTES' tab
		And Toggle 360 view
		And User captures note with content 'abc test'
		Then First note should be with content 'abc test'
		And User captures note with content 'xyz'
		Then First note should be with content 'xyz'
		And User deletes the note
		And First note should be with content 'abc test'
