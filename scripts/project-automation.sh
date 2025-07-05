#!/bin/bash

# GitHub Project Automation Script
# Використання: ./scripts/project-automation.sh

# Функція для переміщення issue в колонку "In Progress"
move_to_in_progress() {
    local issue_number=$1
    echo "Moving issue #$issue_number to In Progress..."
    # Тут можна додати команди GitHub CLI
    # gh project item-edit --id $item_id --field-id $field_id --value "In Progress"
}

# Функція для переміщення issue в колонку "Done"
move_to_done() {
    local issue_number=$1
    echo "Moving issue #$issue_number to Done..."
    # gh project item-edit --id $item_id --field-id $field_id --value "Done"
}

# Функція для автоматичного призначення assignee
auto_assign() {
    local issue_number=$1
    local assignee=$2
    echo "Assigning issue #$issue_number to $assignee..."
    gh issue edit $issue_number --add-assignee $assignee
}

# Приклад використання
echo "GitHub Project Automation Script"
echo "================================"
echo ""
echo "Доступні команди:"
echo "1. move_to_in_progress <issue_number>"
echo "2. move_to_done <issue_number>"
echo "3. auto_assign <issue_number> <username>"
echo ""
echo "Приклад:"
echo "  ./scripts/project-automation.sh"
echo "  move_to_in_progress 123"
echo "  auto_assign 123 username" 