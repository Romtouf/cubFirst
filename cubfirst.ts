// === STYLES CSS INTÉGRÉS ===
const injectStyles = () => {
  if (document.getElementById('cubfirst-styles')) return;
  
  const style = document.createElement('style');
  style.id = 'cubfirst-styles';
  style.textContent = `
    /* Styles de base - Namespace cubfirst */
    .cubfirst-hidden { display: none !important; }
    .cubfirst-cursor-pointer { cursor: pointer; }
    
    /* Responsive breakpoints */
    :root {
      --cubfirst-mobile: 480px;
      --cubfirst-tablet: 768px;
      --cubfirst-desktop: 1024px;
    }
    
    /* Mobile-first approach */
    @media (max-width: 480px) {
      .cubfirst-mobile-hidden { display: none !important; }
    }
    
    @media (min-width: 481px) and (max-width: 768px) {
      .cubfirst-tablet-hidden { display: none !important; }
    }
    
    @media (min-width: 769px) {
      .cubfirst-desktop-hidden { display: none !important; }
    }
    
    /* Modal */
    .cubfirst-modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    }
    
    .cubfirst-modal-content {
      background: white;
      padding: 2rem;
      border-radius: 8px;
      max-width: 90%;
      max-height: 90%;
      position: relative;
    }
    
    .cubfirst-modal-close {
      position: absolute;
      top: 10px;
      right: 15px;
      background: none;
      border: none;
      font-size: 24px;
      cursor: pointer;
      color: #666;
    }
    
    /* Tabs */
    .cubfirst-tabs .tab-title {
      padding: 0.5rem 1rem;
      cursor: pointer;
      border-bottom: 2px solid transparent;
    }
    
    .cubfirst-tabs .tab-title.active {
      border-bottom-color: #3b82f6;
      color: #3b82f6;
    }
    
    /* Accordion */
    .accordion-header {
      cursor: pointer;
      padding: 1rem;
      border: 1px solid #e5e7eb;
      background: #f9fafb;
    }
    
    .accordion-content {
      padding: 1rem;
      border: 1px solid #e5e7eb;
      border-top: none;
    }
    
    /* Dropdown */
    .cubfirst-dropdown-menu[hidden] {
      display: none !important;
    }
    
    .cubfirst-dropdown-menu {
      position: absolute;
      background: white;
      border: 1px solid #e5e7eb;
      border-radius: 0.375rem;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
      z-index: 50;
    }
    
    /* Carousel */
    .cubfirst-carousel {
      position: relative;
      overflow: hidden;
    }
    
    .carousel-slide {
      display: none;
    }
    
    .carousel-slide.active {
      display: block;
    }
    
    /* Toast */
    .cubfirst-toast {
      position: fixed;
      bottom: 1rem;
      left: 50%;
      transform: translateX(-50%);
      padding: 1rem 1.5rem;
      border-radius: 0.5rem;
      color: white;
      z-index: 1000;
      transition: opacity 0.5s ease;
    }
    
    .cubfirst-toast.success { background-color: #10b981; }
    .cubfirst-toast.error { background-color: #ef4444; }
    .cubfirst-toast.info { background-color: #6b7280; }
    
    /* Animations */
    .cubfirst-reveal-fade {
      animation: fadeIn 0.6s ease-in-out;
    }
    
    .cubfirst-reveal-slide {
      animation: slideUp 0.6s ease-in-out;
    }
    
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    @keyframes slideUp {
      from { transform: translateY(30px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
    
    /* Hamburger */
    .cubfirst-hamburger {
      display: flex;
      flex-direction: column;
      width: 30px;
      height: 20px;
      cursor: pointer;
    }
    
    .cubfirst-hamburger span {
      width: 100%;
      height: 3px;
      background-color: #333;
      margin: 2px 0;
      transition: 0.3s;
    }
    
    .cubfirst-hamburger.is-active span:nth-child(1) {
      transform: rotate(-45deg) translate(-5px, 6px);
    }
    
    .cubfirst-hamburger.is-active span:nth-child(2) {
      opacity: 0;
    }
    
    .cubfirst-hamburger.is-active span:nth-child(3) {
      transform: rotate(45deg) translate(-5px, -6px);
    }
    
    /* Progress Bar */
    .cubfirst-progress {
      width: 100%;
      height: 8px;
      background-color: #e5e7eb;
      border-radius: 4px;
      overflow: hidden;
      position: relative;
    }
    
    .cubfirst-progress-bar {
      height: 100%;
      background: linear-gradient(90deg, #3b82f6, #1d4ed8);
      border-radius: 4px;
      transition: width 0.3s ease;
      position: relative;
    }
    
    .cubfirst-progress-bar::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
      animation: shimmer 2s infinite;
    }
    
    @keyframes shimmer {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }
    
    .cubfirst-progress-circle {
      width: 120px;
      height: 120px;
      position: relative;
    }
    
    .cubfirst-progress-circle svg {
      width: 100%;
      height: 100%;
      transform: rotate(-90deg);
    }
    
    .cubfirst-progress-circle .progress-ring {
      fill: none;
      stroke: #e5e7eb;
      stroke-width: 8;
    }
    
    .cubfirst-progress-circle .progress-ring-fill {
      fill: none;
      stroke: #3b82f6;
      stroke-width: 8;
      stroke-linecap: round;
      transition: stroke-dasharray 0.3s ease;
    }
    
    .cubfirst-progress-circle .progress-text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 1.2rem;
      font-weight: bold;
      color: #374151;
    }
    
    .cubfirst-progress-steps {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    
    .cubfirst-progress-step {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.875rem;
      font-weight: 600;
      transition: all 0.3s ease;
    }
    
    .cubfirst-progress-step.completed {
      background-color: #10b981;
      color: white;
    }
    
    .cubfirst-progress-step.current {
      background-color: #3b82f6;
      color: white;
    }
    
    .cubfirst-progress-step.pending {
      background-color: #e5e7eb;
      color: #6b7280;
    }
    
    .cubfirst-progress-step::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 100%;
      width: 8px;
      height: 2px;
      background-color: #e5e7eb;
      transform: translateY(-50%);
    }
    
    .cubfirst-progress-step:last-child::after {
      display: none;
    }
    
    .cubfirst-progress-step.completed::after {
      background-color: #10b981;
    }
    
    /* File Upload */
    .cubfirst-file-upload {
      border: 2px dashed #d1d5db;
      border-radius: 8px;
      padding: 2rem;
      text-align: center;
      cursor: pointer;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }
    
    .cubfirst-file-upload:hover {
      border-color: #3b82f6;
      background-color: #f8fafc;
    }
    
    .cubfirst-file-upload.dragover {
      border-color: #10b981;
      background-color: #f0fdf4;
    }
    
    .cubfirst-file-upload input[type="file"] {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      cursor: pointer;
    }
    
    .cubfirst-file-upload-icon {
      font-size: 3rem;
      color: #9ca3af;
      margin-bottom: 1rem;
    }
    
    .cubfirst-file-upload-text {
      font-size: 1.125rem;
      color: #374151;
      margin-bottom: 0.5rem;
    }
    
    .cubfirst-file-upload-hint {
      font-size: 0.875rem;
      color: #6b7280;
    }
    
    .cubfirst-file-list {
      margin-top: 1rem;
    }
    
    .cubfirst-file-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.75rem;
      background: #f9fafb;
      border: 1px solid #e5e7eb;
      border-radius: 6px;
      margin-bottom: 0.5rem;
    }
    
    .cubfirst-file-item-info {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }
    
    .cubfirst-file-item-icon {
      width: 2rem;
      height: 2rem;
      background: #3b82f6;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 0.875rem;
    }
    
    .cubfirst-file-item-details {
      flex: 1;
    }
    
    .cubfirst-file-item-name {
      font-weight: 500;
      color: #374151;
    }
    
    .cubfirst-file-item-size {
      font-size: 0.875rem;
      color: #6b7280;
    }
    
    .cubfirst-file-item-remove {
      background: none;
      border: none;
      color: #ef4444;
      cursor: pointer;
      padding: 0.25rem;
      border-radius: 4px;
    }
    
    .cubfirst-file-item-remove:hover {
      background: #fef2f2;
    }
    
    .cubfirst-file-progress {
      width: 100%;
      height: 4px;
      background: #e5e7eb;
      border-radius: 2px;
      overflow: hidden;
      margin-top: 0.5rem;
    }
    
    .cubfirst-file-progress-bar {
      height: 100%;
      background: #3b82f6;
      transition: width 0.3s ease;
    }
    
    /* Date Picker */
    .cubfirst-date-picker {
      position: relative;
    }
    
    .cubfirst-date-picker input {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid #d1d5db;
      border-radius: 6px;
      font-size: 1rem;
    }
    
    .cubfirst-date-picker input:focus {
      outline: none;
      border-color: #3b82f6;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }
    
    .cubfirst-date-picker-calendar {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: white;
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
      z-index: 50;
      padding: 1rem;
      margin-top: 0.25rem;
    }
    
    .cubfirst-date-picker-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1rem;
    }
    
    .cubfirst-date-picker-nav {
      background: none;
      border: none;
      cursor: pointer;
      padding: 0.5rem;
      border-radius: 4px;
    }
    
    .cubfirst-date-picker-nav:hover {
      background: #f3f4f6;
    }
    
    .cubfirst-date-picker-month {
      font-weight: 600;
      color: #374151;
    }
    
    .cubfirst-date-picker-grid {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 0.25rem;
    }
    
    .cubfirst-date-picker-day {
      padding: 0.5rem;
      text-align: center;
      cursor: pointer;
      border-radius: 4px;
      font-size: 0.875rem;
    }
    
    .cubfirst-date-picker-day:hover {
      background: #f3f4f6;
    }
    
    .cubfirst-date-picker-day.selected {
      background: #3b82f6;
      color: white;
    }
    
    .cubfirst-date-picker-day.other-month {
      color: #9ca3af;
    }
    
    .cubfirst-date-picker-day.today {
      font-weight: 600;
    }
    
    /* Color Picker */
    .cubfirst-color-picker {
      position: relative;
      display: inline-block;
    }
    
    .cubfirst-color-picker-input {
      width: 3rem;
      height: 3rem;
      border: 2px solid #d1d5db;
      border-radius: 6px;
      cursor: pointer;
      background: none;
    }
    
    .cubfirst-color-picker-palette {
      position: absolute;
      top: 100%;
      left: 0;
      background: white;
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
      z-index: 50;
      padding: 1rem;
      margin-top: 0.25rem;
      display: grid;
      grid-template-columns: repeat(8, 1fr);
      gap: 0.5rem;
    }
    
    .cubfirst-color-picker-color {
      width: 2rem;
      height: 2rem;
      border-radius: 4px;
      cursor: pointer;
      border: 2px solid transparent;
      transition: all 0.2s ease;
    }
    
    .cubfirst-color-picker-color:hover {
      transform: scale(1.1);
    }
    
    .cubfirst-color-picker-color.selected {
      border-color: #374151;
    }
    
    /* Slider */
    .cubfirst-slider {
      position: relative;
      width: 100%;
      height: 6px;
      background: #e5e7eb;
      border-radius: 3px;
      cursor: pointer;
    }
    
    .cubfirst-slider-track {
      height: 100%;
      background: #3b82f6;
      border-radius: 3px;
      position: relative;
    }
    
    .cubfirst-slider-thumb {
      position: absolute;
      top: 50%;
      right: 0;
      width: 20px;
      height: 20px;
      background: white;
      border: 2px solid #3b82f6;
      border-radius: 50%;
      transform: translate(50%, -50%);
      cursor: grab;
    }
    
    .cubfirst-slider-thumb:active {
      cursor: grabbing;
    }
    
    .cubfirst-slider-thumb:hover {
      transform: translate(50%, -50%) scale(1.1);
    }
    
    .cubfirst-slider-value {
      position: absolute;
      top: -2rem;
      left: 50%;
      transform: translateX(-50%);
      background: #374151;
      color: white;
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
      font-size: 0.875rem;
      white-space: nowrap;
    }
    
    /* Switch */
    .cubfirst-switch {
      position: relative;
      display: inline-block;
      width: 3rem;
      height: 1.5rem;
    }
    
    .cubfirst-switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }
    
    .cubfirst-switch-slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #d1d5db;
      transition: 0.3s;
      border-radius: 1.5rem;
    }
    
    .cubfirst-switch-slider:before {
      position: absolute;
      content: "";
      height: 1.25rem;
      width: 1.25rem;
      left: 0.125rem;
      bottom: 0.125rem;
      background-color: white;
      transition: 0.3s;
      border-radius: 50%;
    }
    
    .cubfirst-switch input:checked + .cubfirst-switch-slider {
      background-color: #3b82f6;
    }
    
    .cubfirst-switch input:checked + .cubfirst-switch-slider:before {
      transform: translateX(1.5rem);
    }
    
    .cubfirst-switch input:focus + .cubfirst-switch-slider {
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }
    
    /* Breadcrumb */
    .cubfirst-breadcrumb {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.875rem;
    }
    
    .cubfirst-breadcrumb-item {
      color: #6b7280;
      text-decoration: none;
    }
    
    .cubfirst-breadcrumb-item:hover {
      color: #374151;
    }
    
    .cubfirst-breadcrumb-item.active {
      color: #374151;
      font-weight: 500;
    }
    
    .cubfirst-breadcrumb-separator {
      color: #9ca3af;
    }
    
    /* Pagination */
    .cubfirst-pagination {
      display: flex;
      align-items: center;
      gap: 0.25rem;
    }
    
    .cubfirst-pagination-button {
      padding: 0.5rem 0.75rem;
      border: 1px solid #d1d5db;
      background: white;
      color: #374151;
      text-decoration: none;
      border-radius: 4px;
      transition: all 0.2s ease;
    }
    
    .cubfirst-pagination-button:hover {
      background: #f9fafb;
      border-color: #9ca3af;
    }
    
    .cubfirst-pagination-button.active {
      background: #3b82f6;
      border-color: #3b82f6;
      color: white;
    }
    
    .cubfirst-pagination-button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    
    .cubfirst-pagination-ellipsis {
      padding: 0.5rem;
      color: #6b7280;
    }
    
    /* Sidebar */
    .cubfirst-sidebar {
      position: fixed;
      top: 0;
      left: -300px;
      width: 300px;
      height: 100vh;
      background: white;
      border-right: 1px solid #e5e7eb;
      transition: left 0.3s ease;
      z-index: 50;
      overflow-y: auto;
    }
    
    .cubfirst-sidebar.open {
      left: 0;
    }
    
    .cubfirst-sidebar-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      z-index: 40;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
    }
    
    .cubfirst-sidebar-overlay.show {
      opacity: 1;
      visibility: visible;
    }
    
    .cubfirst-sidebar-header {
      padding: 1rem;
      border-bottom: 1px solid #e5e7eb;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    
    .cubfirst-sidebar-close {
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      color: #6b7280;
    }
    
    .cubfirst-sidebar-content {
      padding: 1rem;
    }
    
    /* Sticky */
    .cubfirst-sticky {
      position: sticky;
      z-index: 10;
    }
    
    /* Alert */
    .cubfirst-alert {
      padding: 1rem;
      border-radius: 6px;
      margin-bottom: 1rem;
      display: flex;
      align-items: flex-start;
      gap: 0.75rem;
    }
    
    .cubfirst-alert.success {
      background: #f0fdf4;
      border: 1px solid #bbf7d0;
      color: #166534;
    }
    
    .cubfirst-alert.error {
      background: #fef2f2;
      border: 1px solid #fecaca;
      color: #991b1b;
    }
    
    .cubfirst-alert.warning {
      background: #fffbeb;
      border: 1px solid #fed7aa;
      color: #92400e;
    }
    
    .cubfirst-alert.info {
      background: #eff6ff;
      border: 1px solid #bfdbfe;
      color: #1e40af;
    }
    
    .cubfirst-alert-icon {
      font-size: 1.25rem;
      flex-shrink: 0;
    }
    
    .cubfirst-alert-content {
      flex: 1;
    }
    
    .cubfirst-alert-title {
      font-weight: 600;
      margin-bottom: 0.25rem;
    }
    
    .cubfirst-alert-message {
      font-size: 0.875rem;
    }
    
    .cubfirst-alert-close {
      background: none;
      border: none;
      font-size: 1.25rem;
      cursor: pointer;
      color: inherit;
      opacity: 0.7;
    }
    
    .cubfirst-alert-close:hover {
      opacity: 1;
    }
    
    /* Skeleton */
    .cubfirst-skeleton {
      background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
      background-size: 200% 100%;
      animation: loading 1.5s infinite;
    }
    
    @keyframes loading {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
    
    .cubfirst-skeleton-line {
      height: 1rem;
      border-radius: 4px;
      margin-bottom: 0.5rem;
    }
    
    .cubfirst-skeleton-circle {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
    }
    
    .cubfirst-skeleton-rect {
      height: 8rem;
      border-radius: 6px;
    }
    
    /* Lazy Loading */
    .cubfirst-lazy-load {
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    
    .cubfirst-lazy-load.loaded {
      opacity: 1;
    }
    
    /* Search */
    .cubfirst-search {
      position: relative;
    }
    
    .cubfirst-search-input {
      width: 100%;
      padding: 0.75rem 2.5rem 0.75rem 0.75rem;
      border: 1px solid #d1d5db;
      border-radius: 6px;
      font-size: 1rem;
    }
    
    .cubfirst-search-input:focus {
      outline: none;
      border-color: #3b82f6;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }
    
    .cubfirst-search-button {
      position: absolute;
      right: 0.5rem;
      top: 50%;
      transform: translateY(-50%);
      background: none;
      border: none;
      cursor: pointer;
      padding: 0.5rem;
      color: #6b7280;
    }
    
    .cubfirst-search-results {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: white;
      border: 1px solid #e5e7eb;
      border-radius: 6px;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
      z-index: 50;
      margin-top: 0.25rem;
      max-height: 300px;
      overflow-y: auto;
    }
    
    .cubfirst-search-result {
      padding: 0.75rem;
      cursor: pointer;
      border-bottom: 1px solid #f3f4f6;
    }
    
    .cubfirst-search-result:hover {
      background: #f9fafb;
    }
    
    .cubfirst-search-result:last-child {
      border-bottom: none;
    }
    
    .cubfirst-search-highlight {
      background: #fef3c7;
      padding: 0.125rem 0.25rem;
      border-radius: 2px;
    }
    
    /* Autocomplete */
    .cubfirst-autocomplete {
      position: relative;
    }
    
    .cubfirst-autocomplete-input {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid #d1d5db;
      border-radius: 6px;
      font-size: 1rem;
    }
    
    .cubfirst-autocomplete-input:focus {
      outline: none;
      border-color: #3b82f6;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }
    
    .cubfirst-autocomplete-dropdown {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: white;
      border: 1px solid #e5e7eb;
      border-radius: 6px;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
      z-index: 50;
      margin-top: 0.25rem;
      max-height: 200px;
      overflow-y: auto;
    }
    
    .cubfirst-autocomplete-item {
      padding: 0.75rem;
      cursor: pointer;
      border-bottom: 1px solid #f3f4f6;
    }
    
    .cubfirst-autocomplete-item:hover {
      background: #f9fafb;
    }
    
    .cubfirst-autocomplete-item:last-child {
      border-bottom: none;
    }
    
    .cubfirst-autocomplete-item.selected {
      background: #eff6ff;
    }
    
    /* Swipe */
    .cubfirst-swipe {
      position: relative;
      overflow: hidden;
      touch-action: pan-y;
    }
    
    .cubfirst-swipe-container {
      display: flex;
      transition: transform 0.3s ease;
    }
    
    .cubfirst-swipe-item {
      flex: 0 0 100%;
      width: 100%;
    }
    
    .cubfirst-swipe-indicators {
      position: absolute;
      bottom: 1rem;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 0.5rem;
    }
    
    .cubfirst-swipe-indicator {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.5);
      cursor: pointer;
      transition: background 0.3s ease;
    }
    
    .cubfirst-swipe-indicator.active {
      background: white;
    }
    
    /* Data Table */
    .cubfirst-data-table {
      width: 100%;
      border-collapse: collapse;
      background: white;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }
    
    .cubfirst-data-table th {
      background: #f8fafc;
      padding: 1rem;
      text-align: left;
      font-weight: 600;
      color: #374151;
      border-bottom: 1px solid #e5e7eb;
      cursor: pointer;
      user-select: none;
      position: relative;
    }
    
    .cubfirst-data-table th:hover {
      background: #f1f5f9;
    }
    
    .cubfirst-data-table th.sortable::after {
      content: '↕';
      position: absolute;
      right: 0.5rem;
      opacity: 0.5;
    }
    
    .cubfirst-data-table th.sort-asc::after {
      content: '↑';
      opacity: 1;
    }
    
    .cubfirst-data-table th.sort-desc::after {
      content: '↓';
      opacity: 1;
    }
    
    .cubfirst-data-table td {
      padding: 1rem;
      border-bottom: 1px solid #f3f4f6;
      color: #374151;
    }
    
    .cubfirst-data-table tbody tr:hover {
      background: #f9fafb;
    }
    
    .cubfirst-data-table tbody tr.selected {
      background: #eff6ff;
    }
    
    .cubfirst-data-table-container {
      position: relative;
      overflow-x: auto;
    }
    
    .cubfirst-data-table-toolbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      background: #f8fafc;
      border-bottom: 1px solid #e5e7eb;
    }
    
    .cubfirst-data-table-search {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    
    .cubfirst-data-table-search input {
      padding: 0.5rem;
      border: 1px solid #d1d5db;
      border-radius: 4px;
      font-size: 0.875rem;
    }
    
    .cubfirst-data-table-filters {
      display: flex;
      gap: 0.5rem;
      align-items: center;
    }
    
    .cubfirst-data-table-filter {
      padding: 0.5rem;
      border: 1px solid #d1d5db;
      border-radius: 4px;
      background: white;
      font-size: 0.875rem;
    }
    
    .cubfirst-data-table-pagination {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      background: #f8fafc;
      border-top: 1px solid #e5e7eb;
    }
    
    .cubfirst-data-table-info {
      color: #6b7280;
      font-size: 0.875rem;
    }
    
    .cubfirst-data-table-export {
      display: flex;
      gap: 0.5rem;
    }
    
    .cubfirst-data-table-export button {
      padding: 0.5rem 1rem;
      border: 1px solid #d1d5db;
      border-radius: 4px;
      background: white;
      color: #374151;
      font-size: 0.875rem;
      cursor: pointer;
    }
    
    .cubfirst-data-table-export button:hover {
      background: #f9fafb;
    }
    
    .cubfirst-data-table-loading {
      text-align: center;
      padding: 2rem;
      color: #6b7280;
    }
    
    .cubfirst-data-table-empty {
      text-align: center;
      padding: 2rem;
      color: #6b7280;
    }
    
    /* Time Picker */
    .cubfirst-time-picker {
      position: relative;
    }
    
    .cubfirst-time-picker input {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid #d1d5db;
      border-radius: 6px;
      font-size: 1rem;
    }
    
    .cubfirst-time-picker input:focus {
      outline: none;
      border-color: #3b82f6;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }
    
    .cubfirst-time-picker-dropdown {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: white;
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
      z-index: 50;
      margin-top: 0.25rem;
      padding: 1rem;
    }
    
    .cubfirst-time-picker-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      align-items: center;
    }
    
    .cubfirst-time-picker-inputs {
      display: flex;
      gap: 0.5rem;
      align-items: center;
    }
    
    .cubfirst-time-picker-inputs input {
      width: 3rem;
      text-align: center;
      padding: 0.5rem;
      border: 1px solid #d1d5db;
      border-radius: 4px;
    }
    
    .cubfirst-time-picker-separator {
      font-size: 1.5rem;
      color: #6b7280;
    }
    
    .cubfirst-time-picker-format {
      display: flex;
      gap: 0.5rem;
    }
    
    .cubfirst-time-picker-format button {
      padding: 0.5rem 1rem;
      border: 1px solid #d1d5db;
      border-radius: 4px;
      background: white;
      color: #374151;
      cursor: pointer;
      font-size: 0.875rem;
    }
    
    .cubfirst-time-picker-format button.active {
      background: #3b82f6;
      color: white;
      border-color: #3b82f6;
    }
    
    /* Multi Select */
    .cubfirst-multi-select {
      position: relative;
    }
    
    .cubfirst-multi-select-input {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid #d1d5db;
      border-radius: 6px;
      font-size: 1rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    
    .cubfirst-multi-select-input:focus {
      outline: none;
      border-color: #3b82f6;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }
    
    .cubfirst-multi-select-dropdown {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: white;
      border: 1px solid #e5e7eb;
      border-radius: 6px;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
      z-index: 50;
      margin-top: 0.25rem;
      max-height: 200px;
      overflow-y: auto;
    }
    
    .cubfirst-multi-select-search {
      padding: 0.75rem;
      border-bottom: 1px solid #e5e7eb;
    }
    
    .cubfirst-multi-select-search input {
      width: 100%;
      padding: 0.5rem;
      border: 1px solid #d1d5db;
      border-radius: 4px;
      font-size: 0.875rem;
    }
    
    .cubfirst-multi-select-options {
      max-height: 150px;
      overflow-y: auto;
    }
    
    .cubfirst-multi-select-option {
      padding: 0.75rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    
    .cubfirst-multi-select-option:hover {
      background: #f9fafb;
    }
    
    .cubfirst-multi-select-option.selected {
      background: #eff6ff;
    }
    
    .cubfirst-multi-select-option input[type="checkbox"] {
      margin: 0;
    }
    
    .cubfirst-multi-select-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.25rem;
      margin-bottom: 0.5rem;
    }
    
    .cubfirst-multi-select-tag {
      display: flex;
      align-items: center;
      gap: 0.25rem;
      padding: 0.25rem 0.5rem;
      background: #e5e7eb;
      border-radius: 4px;
      font-size: 0.875rem;
    }
    
    .cubfirst-multi-select-tag-remove {
      background: none;
      border: none;
      color: #6b7280;
      cursor: pointer;
      padding: 0;
      font-size: 0.875rem;
    }
    
    .cubfirst-multi-select-tag-remove:hover {
      color: #ef4444;
    }
    
    /* Loader/Spinner */
    .cubfirst-loader {
      display: inline-block;
      position: relative;
    }
    
    .cubfirst-loader-spinner {
      width: 40px;
      height: 40px;
      border: 4px solid #f3f4f6;
      border-top: 4px solid #3b82f6;
      border-radius: 50%;
      animation: cubfirst-spin 1s linear infinite;
    }
    
    .cubfirst-loader-spinner.small {
      width: 20px;
      height: 20px;
      border-width: 2px;
    }
    
    .cubfirst-loader-spinner.large {
      width: 60px;
      height: 60px;
      border-width: 6px;
    }
    
    .cubfirst-loader-dots {
      display: flex;
      gap: 4px;
      align-items: center;
    }
    
    .cubfirst-loader-dot {
      width: 8px;
      height: 8px;
      background: #3b82f6;
      border-radius: 50%;
      animation: cubfirst-bounce 1.4s ease-in-out infinite both;
    }
    
    .cubfirst-loader-dot:nth-child(1) { animation-delay: -0.32s; }
    .cubfirst-loader-dot:nth-child(2) { animation-delay: -0.16s; }
    .cubfirst-loader-dot:nth-child(3) { animation-delay: 0s; }
    
    .cubfirst-loader-bars {
      display: flex;
      gap: 2px;
      align-items: end;
    }
    
    .cubfirst-loader-bar {
      width: 4px;
      background: #3b82f6;
      border-radius: 2px;
      animation: cubfirst-pulse 1.2s ease-in-out infinite;
    }
    
    .cubfirst-loader-bar:nth-child(1) { height: 20px; animation-delay: -0.24s; }
    .cubfirst-loader-bar:nth-child(2) { height: 30px; animation-delay: -0.12s; }
    .cubfirst-loader-bar:nth-child(3) { height: 40px; animation-delay: 0s; }
    .cubfirst-loader-bar:nth-child(4) { height: 30px; animation-delay: 0.12s; }
    .cubfirst-loader-bar:nth-child(5) { height: 20px; animation-delay: 0.24s; }
    
    .cubfirst-loader-text {
      margin-top: 0.5rem;
      color: #6b7280;
      font-size: 0.875rem;
      text-align: center;
    }
    
    .cubfirst-loader-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(255, 255, 255, 0.9);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
    }
    
    .cubfirst-loader-overlay.dark {
      background: rgba(0, 0, 0, 0.8);
    }
    
    .cubfirst-loader-overlay .cubfirst-loader-text {
      color: #374151;
    }
    
    .cubfirst-loader-overlay.dark .cubfirst-loader-text {
      color: white;
    }
    
    @keyframes cubfirst-spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    
    @keyframes cubfirst-bounce {
      0%, 80%, 100% {
        transform: scale(0);
      }
      40% {
        transform: scale(1);
      }
    }
    
    @keyframes cubfirst-pulse {
      0%, 40%, 100% {
        transform: scaleY(0.4);
      }
      20% {
        transform: scaleY(1);
      }
    }
    
    /* Progress Scroll */
    .cubfirst-progress-scroll {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: rgba(0, 0, 0, 0.1);
      z-index: 9999;
      transition: opacity 0.3s ease;
    }
    
    .cubfirst-progress-scroll-bar {
      height: 100%;
      background: linear-gradient(90deg, #3b82f6, #1d4ed8);
      width: 0%;
      transition: width 0.1s ease;
      position: relative;
      overflow: hidden;
    }
    
    .cubfirst-progress-scroll-bar::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
      animation: cubfirst-progress-shimmer 2s infinite;
    }
    
    .cubfirst-progress-scroll.bottom {
      top: auto;
      bottom: 0;
    }
    
    .cubfirst-progress-scroll.left {
      top: 0;
      left: 0;
      width: 4px;
      height: 100%;
    }
    
    .cubfirst-progress-scroll.left .cubfirst-progress-scroll-bar {
      width: 100%;
      height: 0%;
      transition: height 0.1s ease;
    }
    
    .cubfirst-progress-scroll.right {
      top: 0;
      right: 0;
      left: auto;
      width: 4px;
      height: 100%;
    }
    
    .cubfirst-progress-scroll.right .cubfirst-progress-scroll-bar {
      width: 100%;
      height: 0%;
      transition: height 0.1s ease;
    }
    
    .cubfirst-progress-scroll-circle {
      position: fixed;
      top: 20px;
      right: 20px;
      width: 60px;
      height: 60px;
      z-index: 9999;
    }
    
    .cubfirst-progress-scroll-circle svg {
      width: 100%;
      height: 100%;
      transform: rotate(-90deg);
    }
    
    .cubfirst-progress-scroll-circle-bg {
      fill: none;
      stroke: rgba(0, 0, 0, 0.1);
      stroke-width: 4;
    }
    
    .cubfirst-progress-scroll-circle-progress {
      fill: none;
      stroke: #3b82f6;
      stroke-width: 4;
      stroke-linecap: round;
      transition: stroke-dashoffset 0.1s ease;
    }
    
    .cubfirst-progress-scroll-circle-text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 12px;
      font-weight: 600;
      color: #374151;
    }
    
    .cubfirst-progress-scroll.hidden {
      opacity: 0;
      pointer-events: none;
    }
    
    @keyframes cubfirst-progress-shimmer {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(100%);
      }
    }
    
    /* Theme System */
    .cubfirst-theme-switcher {
      position: relative;
      display: inline-block;
    }
    
    .cubfirst-theme-switcher button {
      padding: 0.5rem 1rem;
      border: 1px solid #d1d5db;
      border-radius: 6px;
      background: white;
      color: #374151;
      cursor: pointer;
      font-size: 0.875rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    
    .cubfirst-theme-switcher button:hover {
      background: #f9fafb;
    }
    
    .cubfirst-theme-switcher button:focus {
      outline: none;
      border-color: #3b82f6;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }
    
    .cubfirst-theme-dropdown {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: white;
      border: 1px solid #e5e7eb;
      border-radius: 6px;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
      z-index: 50;
      margin-top: 0.25rem;
      overflow: hidden;
    }
    
    .cubfirst-theme-option {
      padding: 0.75rem 1rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      border-bottom: 1px solid #f3f4f6;
    }
    
    .cubfirst-theme-option:last-child {
      border-bottom: none;
    }
    
    .cubfirst-theme-option:hover {
      background: #f9fafb;
    }
    
    .cubfirst-theme-option.active {
      background: #eff6ff;
      color: #1d4ed8;
    }
    
    .cubfirst-theme-preview {
      width: 20px;
      height: 20px;
      border-radius: 4px;
      border: 1px solid #d1d5db;
    }
    
    .cubfirst-theme-preview.light {
      background: linear-gradient(45deg, #ffffff 50%, #f3f4f6 50%);
    }
    
    .cubfirst-theme-preview.dark {
      background: linear-gradient(45deg, #1f2937 50%, #111827 50%);
    }
    
    .cubfirst-theme-preview.blue {
      background: linear-gradient(45deg, #3b82f6 50%, #1d4ed8 50%);
    }
    
    .cubfirst-theme-preview.green {
      background: linear-gradient(45deg, #10b981 50%, #059669 50%);
    }
    
    .cubfirst-theme-preview.purple {
      background: linear-gradient(45deg, #8b5cf6 50%, #7c3aed 50%);
    }
    
    .cubfirst-theme-preview.red {
      background: linear-gradient(45deg, #ef4444 50%, #dc2626 50%);
    }
    
    /* Drawer/Bottom Sheet */
    .cubfirst-drawer {
      position: fixed;
      background: white;
      box-shadow: 0 -4px 6px -1px rgba(0, 0, 0, 0.1);
      z-index: 50;
      transition: transform 0.3s ease;
      overflow: hidden;
    }
    
    .cubfirst-drawer.top {
      top: 0;
      left: 0;
      right: 0;
      transform: translateY(-100%);
    }
    
    .cubfirst-drawer.bottom {
      bottom: 0;
      left: 0;
      right: 0;
      transform: translateY(100%);
    }
    
    .cubfirst-drawer.left {
      top: 0;
      left: 0;
      bottom: 0;
      transform: translateX(-100%);
    }
    
    .cubfirst-drawer.right {
      top: 0;
      right: 0;
      bottom: 0;
      transform: translateX(100%);
    }
    
    .cubfirst-drawer.open {
      transform: translate(0, 0);
    }
    
    .cubfirst-drawer-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      z-index: 49;
      opacity: 0;
      transition: opacity 0.3s ease;
      pointer-events: none;
    }
    
    .cubfirst-drawer-overlay.show {
      opacity: 1;
      pointer-events: auto;
    }
    
    .cubfirst-drawer-header {
      padding: 1rem;
      border-bottom: 1px solid #e5e7eb;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    
    .cubfirst-drawer-title {
      font-size: 1.125rem;
      font-weight: 600;
      color: #111827;
    }
    
    .cubfirst-drawer-close {
      background: none;
      border: none;
      color: #6b7280;
      cursor: pointer;
      padding: 0.25rem;
      border-radius: 4px;
    }
    
    .cubfirst-drawer-close:hover {
      background: #f3f4f6;
      color: #374151;
    }
    
    .cubfirst-drawer-content {
      padding: 1rem;
      max-height: calc(100vh - 80px);
      overflow-y: auto;
    }
    
    .cubfirst-drawer-handle {
      position: absolute;
      top: 0.5rem;
      left: 50%;
      transform: translateX(-50%);
      width: 40px;
      height: 4px;
      background: #d1d5db;
      border-radius: 2px;
    }
    
    /* Rich Text Editor */
    .cubfirst-rich-editor {
      border: 1px solid #d1d5db;
      border-radius: 6px;
      background: white;
      overflow: hidden;
    }
    
    .cubfirst-rich-editor:focus-within {
      border-color: #3b82f6;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }
    
    .cubfirst-rich-editor-toolbar {
      display: flex;
      flex-wrap: wrap;
      gap: 0.25rem;
      padding: 0.5rem;
      border-bottom: 1px solid #e5e7eb;
      background: #f8fafc;
    }
    
    .cubfirst-rich-editor-button {
      padding: 0.5rem;
      border: 1px solid transparent;
      border-radius: 4px;
      background: white;
      color: #374151;
      cursor: pointer;
      font-size: 0.875rem;
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 32px;
      height: 32px;
    }
    
    .cubfirst-rich-editor-button:hover {
      background: #f3f4f6;
    }
    
    .cubfirst-rich-editor-button.active {
      background: #3b82f6;
      color: white;
      border-color: #3b82f6;
    }
    
    .cubfirst-rich-editor-button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    
    .cubfirst-rich-editor-content {
      min-height: 200px;
      padding: 1rem;
      outline: none;
      font-size: 1rem;
      line-height: 1.5;
    }
    
    .cubfirst-rich-editor-content:empty::before {
      content: attr(data-placeholder);
      color: #9ca3af;
      pointer-events: none;
    }
    
    .cubfirst-rich-editor-dropdown {
      position: relative;
      display: inline-block;
    }
    
    .cubfirst-rich-editor-dropdown-content {
      position: absolute;
      top: 100%;
      left: 0;
      background: white;
      border: 1px solid #e5e7eb;
      border-radius: 4px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      z-index: 10;
      min-width: 120px;
    }
    
    .cubfirst-rich-editor-dropdown-item {
      padding: 0.5rem 0.75rem;
      cursor: pointer;
      font-size: 0.875rem;
      color: #374151;
    }
    
    .cubfirst-rich-editor-dropdown-item:hover {
      background: #f3f4f6;
    }
    
    .cubfirst-rich-editor-color-picker {
      position: absolute;
      top: 100%;
      left: 0;
      background: white;
      border: 1px solid #e5e7eb;
      border-radius: 4px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      z-index: 10;
      padding: 0.5rem;
    }
    
    .cubfirst-rich-editor-color-option {
      width: 24px;
      height: 24px;
      border-radius: 4px;
      cursor: pointer;
      border: 2px solid transparent;
      margin: 0.125rem;
    }
    
    .cubfirst-rich-editor-color-option:hover {
      border-color: #3b82f6;
    }
    
    .cubfirst-rich-editor-color-option.active {
      border-color: #1d4ed8;
    }
    
    /* ===== RESPONSIVE IMPROVEMENTS ===== */
    
    /* Modal responsive */
    @media (max-width: 480px) {
      .cubfirst-modal {
        padding: 0.5rem;
      }
      
      .cubfirst-modal-content {
        padding: 1rem;
        border-radius: 0;
        max-height: 100vh;
        width: 100%;
        max-width: none;
      }
      
      .cubfirst-modal-close {
        top: 0.5rem;
        right: 0.5rem;
        font-size: 1.25rem;
      }
    }
    
    @media (min-width: 481px) and (max-width: 768px) {
      .cubfirst-modal-content {
        max-width: 90%;
        padding: 1.25rem;
      }
    }
    
    /* Tabs responsive */
    @media (max-width: 480px) {
      .cubfirst-tabs .tab-title {
        padding: 0.75rem 0.5rem;
        font-size: 0.875rem;
        flex: 1;
        text-align: center;
      }
      
      .cubfirst-tabs {
        flex-direction: column;
      }
      
      .cubfirst-tabs .tab-content {
        padding: 1rem 0.5rem;
      }
    }
    
    /* Carousel responsive */
    @media (max-width: 480px) {
      .cubfirst-carousel {
        height: 200px;
      }
      
      .cubfirst-carousel-slide {
        font-size: 0.875rem;
        padding: 1rem;
      }
      
      .cubfirst-carousel-nav {
        font-size: 1.5rem;
        padding: 0.5rem;
      }
      
      .cubfirst-carousel-bullets {
        bottom: 0.5rem;
      }
      
      .cubfirst-carousel-bullet {
        width: 8px;
        height: 8px;
        margin: 0 3px;
      }
    }
    
    @media (min-width: 481px) and (max-width: 768px) {
      .cubfirst-carousel {
        height: 300px;
      }
    }
    
    /* Data Table responsive */
    @media (max-width: 768px) {
      .cubfirst-data-table-container {
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
      }
      
      .cubfirst-data-table {
        min-width: 600px;
      }
      
      .cubfirst-data-table th,
      .cubfirst-data-table td {
        padding: 0.5rem;
        font-size: 0.875rem;
      }
      
      .cubfirst-data-table-toolbar {
        flex-direction: column;
        gap: 0.5rem;
        align-items: stretch;
      }
      
      .cubfirst-data-table-search {
        width: 100%;
      }
      
      .cubfirst-data-table-search input {
        width: 100%;
      }
      
      .cubfirst-data-table-pagination {
        flex-direction: column;
        gap: 0.5rem;
        text-align: center;
      }
    }
    
    @media (max-width: 480px) {
      .cubfirst-data-table th,
      .cubfirst-data-table td {
        padding: 0.25rem;
        font-size: 0.75rem;
      }
    }
    
    /* Drawer responsive */
    @media (max-width: 480px) {
      .cubfirst-drawer.bottom {
        height: 80vh !important;
      }
      
      .cubfirst-drawer.left,
      .cubfirst-drawer.right {
        width: 100vw !important;
      }
      
      .cubfirst-drawer-content {
        padding: 0.75rem;
      }
      
      .cubfirst-drawer-header {
        padding: 0.75rem;
      }
      
      .cubfirst-drawer-title {
        font-size: 1rem;
      }
    }
    
    /* Rich Editor responsive */
    @media (max-width: 480px) {
      .cubfirst-rich-editor-toolbar {
        flex-wrap: wrap;
        gap: 0.125rem;
        padding: 0.25rem;
      }
      
      .cubfirst-rich-editor-button {
        min-width: 28px;
        height: 28px;
        font-size: 0.75rem;
        padding: 0.25rem;
      }
      
      .cubfirst-rich-editor-content {
        min-height: 150px;
        padding: 0.75rem;
        font-size: 0.875rem;
      }
    }
    
    /* Time Picker responsive */
    @media (max-width: 480px) {
      .cubfirst-time-picker-dropdown {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 90vw;
        max-width: 300px;
      }
      
      .cubfirst-time-picker-grid {
        grid-template-columns: 1fr;
        gap: 0.5rem;
      }
      
      .cubfirst-time-picker-inputs {
        justify-content: center;
      }
    }
    
    /* Multi Select responsive */
    @media (max-width: 480px) {
      .cubfirst-multi-select-dropdown {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 90vw;
        max-width: 300px;
        max-height: 60vh;
      }
      
      .cubfirst-multi-select-tags {
        flex-wrap: wrap;
        gap: 0.125rem;
      }
      
      .cubfirst-multi-select-tag {
        font-size: 0.75rem;
        padding: 0.125rem 0.25rem;
      }
    }
    
    /* Progress Scroll responsive */
    @media (max-width: 480px) {
      .cubfirst-progress-scroll-circle {
        width: 40px;
        height: 40px;
        top: 10px;
        right: 10px;
      }
      
      .cubfirst-progress-scroll-circle-text {
        font-size: 10px;
      }
    }
    
    /* Theme System responsive */
    @media (max-width: 480px) {
      .cubfirst-theme-switcher button {
        padding: 0.375rem 0.75rem;
        font-size: 0.75rem;
      }
      
      .cubfirst-theme-preview {
        width: 16px;
        height: 16px;
      }
      
      .cubfirst-theme-dropdown {
        width: 100vw;
        left: 0;
        right: 0;
        margin-left: -1rem;
        margin-right: -1rem;
      }
    }
    
    /* File Upload responsive */
    @media (max-width: 480px) {
      .cubfirst-file-upload {
        padding: 1rem 0.5rem;
      }
      
      .cubfirst-file-upload-area {
        padding: 2rem 1rem;
        font-size: 0.875rem;
      }
      
      .cubfirst-file-list {
        gap: 0.5rem;
      }
      
      .cubfirst-file-item {
        padding: 0.5rem;
        font-size: 0.75rem;
      }
    }
    
    /* Date Picker responsive */
    @media (max-width: 480px) {
      .cubfirst-date-picker-dropdown {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 90vw;
        max-width: 300px;
      }
      
      .cubfirst-date-picker-calendar {
        font-size: 0.875rem;
      }
      
      .cubfirst-date-picker-day {
        width: 32px;
        height: 32px;
        font-size: 0.75rem;
      }
    }
    
    /* Color Picker responsive */
    @media (max-width: 480px) {
      .cubfirst-color-picker-palette {
        grid-template-columns: repeat(4, 1fr);
        gap: 0.5rem;
        padding: 0.75rem;
      }
      
      .cubfirst-color-picker-color {
        width: 32px;
        height: 32px;
      }
    }
    
    /* Slider responsive */
    @media (max-width: 480px) {
      .cubfirst-slider {
        height: 6px;
      }
      
      .cubfirst-slider-thumb {
        width: 20px;
        height: 20px;
      }
      
      .cubfirst-slider-value {
        font-size: 0.75rem;
        margin-top: 0.25rem;
      }
    }
    
    /* Switch responsive */
    @media (max-width: 480px) {
      .cubfirst-switch {
        width: 40px;
        height: 20px;
      }
      
      .cubfirst-switch-thumb {
        width: 16px;
        height: 16px;
      }
    }
    
    /* Breadcrumb responsive */
    @media (max-width: 480px) {
      .cubfirst-breadcrumb {
        flex-wrap: wrap;
        gap: 0.25rem;
      }
      
      .cubfirst-breadcrumb-item {
        font-size: 0.75rem;
        padding: 0.25rem 0.5rem;
      }
      
      .cubfirst-breadcrumb-separator {
        font-size: 0.75rem;
      }
    }
    
    /* Pagination responsive */
    @media (max-width: 480px) {
      .cubfirst-pagination {
        flex-wrap: wrap;
        gap: 0.25rem;
        justify-content: center;
      }
      
      .cubfirst-pagination-button {
        min-width: 32px;
        height: 32px;
        font-size: 0.75rem;
        padding: 0.25rem;
      }
      
      .cubfirst-pagination-ellipsis {
        font-size: 0.75rem;
      }
    }
    
    /* Sidebar responsive */
    @media (max-width: 768px) {
      .cubfirst-sidebar {
        width: 100vw !important;
        max-width: 300px;
      }
    }
    
    @media (max-width: 480px) {
      .cubfirst-sidebar {
        width: 100vw !important;
        max-width: none;
      }
    }
    
    /* Alert responsive */
    @media (max-width: 480px) {
      .cubfirst-alert {
        margin: 0.5rem;
        padding: 0.75rem;
        font-size: 0.875rem;
      }
      
      .cubfirst-alert-title {
        font-size: 1rem;
        margin-bottom: 0.25rem;
      }
      
      .cubfirst-alert-close {
        top: 0.5rem;
        right: 0.5rem;
        font-size: 1rem;
      }
    }
    
    /* Skeleton responsive */
    @media (max-width: 480px) {
      .cubfirst-skeleton-line {
        height: 12px;
        margin-bottom: 8px;
      }
      
      .cubfirst-skeleton-circle {
        width: 40px;
        height: 40px;
      }
      
      .cubfirst-skeleton-rect {
        height: 60px;
      }
    }
    
    /* Search responsive */
    @media (max-width: 480px) {
      .cubfirst-search {
        width: 100%;
      }
      
      .cubfirst-search input {
        font-size: 0.875rem;
        padding: 0.5rem;
      }
      
      .cubfirst-search-results {
        font-size: 0.875rem;
        max-height: 200px;
      }
    }
    
    /* Autocomplete responsive */
    @media (max-width: 480px) {
      .cubfirst-autocomplete-dropdown {
        font-size: 0.875rem;
        max-height: 200px;
      }
      
      .cubfirst-autocomplete-item {
        padding: 0.5rem;
      }
    }
    
    /* Swipe responsive */
    @media (max-width: 480px) {
      .cubfirst-swipe-indicators {
        bottom: 0.5rem;
      }
      
      .cubfirst-swipe-indicator {
        width: 6px;
        height: 6px;
        margin: 0 2px;
      }
    }
    
    /* Loader responsive */
    @media (max-width: 480px) {
      .cubfirst-loader-spinner.small {
        width: 16px;
        height: 16px;
        border-width: 2px;
      }
      
      .cubfirst-loader-spinner {
        width: 32px;
        height: 32px;
        border-width: 3px;
      }
      
      .cubfirst-loader-spinner.large {
        width: 48px;
        height: 48px;
        border-width: 4px;
      }
      
      .cubfirst-loader-dot {
        width: 6px;
        height: 6px;
      }
      
      .cubfirst-loader-bar {
        width: 3px;
      }
      
      .cubfirst-loader-bar:nth-child(1) { height: 16px; }
      .cubfirst-loader-bar:nth-child(2) { height: 24px; }
      .cubfirst-loader-bar:nth-child(3) { height: 32px; }
      .cubfirst-loader-bar:nth-child(4) { height: 24px; }
      .cubfirst-loader-bar:nth-child(5) { height: 16px; }
    }
    
    /* Progress Bar responsive */
    @media (max-width: 480px) {
      .cubfirst-progress {
        height: 6px;
      }
      
      .cubfirst-progress-circle {
        width: 60px;
        height: 60px;
      }
      
      .cubfirst-progress-steps {
        gap: 0.25rem;
      }
      
      .cubfirst-progress-step {
        width: 24px;
        height: 24px;
        font-size: 0.75rem;
      }
    }
    
    /* Rating responsive */
    @media (max-width: 480px) {
      .cubfirst-rating {
        font-size: 1.25rem;
      }
    }
    
    /* Card responsive */
    @media (max-width: 480px) {
      .cubfirst-card {
        margin: 0.5rem;
        padding: 1rem;
      }
      
      .cubfirst-card-title {
        font-size: 1.125rem;
        margin-bottom: 0.5rem;
      }
      
      .cubfirst-card-content {
        font-size: 0.875rem;
      }
    }
    
    /* Tooltip responsive */
    @media (max-width: 480px) {
      .cubfirst-tooltip {
        font-size: 0.75rem;
        padding: 0.375rem 0.5rem;
        max-width: 200px;
      }
    }
    
    /* Toast responsive */
    @media (max-width: 480px) {
      .cubfirst-toast {
        margin: 0.5rem;
        padding: 0.75rem;
        font-size: 0.875rem;
        max-width: calc(100vw - 1rem);
      }
    }
    
    /* Accordion responsive */
    @media (max-width: 480px) {
      .cubfirst-accordion-title {
        padding: 0.75rem;
        font-size: 0.875rem;
      }
      
      .cubfirst-accordion-content {
        padding: 0.75rem;
        font-size: 0.875rem;
      }
    }
    
    /* Contact Form responsive */
    @media (max-width: 480px) {
      .cubfirst-contact-form {
        padding: 1rem;
      }
      
      .cubfirst-contact-form input,
      .cubfirst-contact-form textarea {
        font-size: 0.875rem;
        padding: 0.75rem;
      }
      
      .cubfirst-contact-form button {
        padding: 0.75rem 1.5rem;
        font-size: 0.875rem;
      }
    }
    
    /* Copy responsive */
    @media (max-width: 480px) {
      .cubfirst-copy {
        padding: 0.5rem;
        font-size: 0.875rem;
      }
    }
    
    /* Toggle responsive */
    @media (max-width: 480px) {
      .cubfirst-toggle {
        padding: 0.5rem;
        font-size: 0.875rem;
      }
    }
    
    /* ScrollTo responsive */
    @media (max-width: 480px) {
      .cubfirst-scroll-to {
        padding: 0.5rem;
        font-size: 0.875rem;
      }
    }
    
    /* Countdown responsive */
    @media (max-width: 480px) {
      .cubfirst-countdown {
        font-size: 1.5rem;
        gap: 0.5rem;
      }
      
      .cubfirst-countdown-item {
        padding: 0.5rem;
        min-width: 50px;
      }
      
      .cubfirst-countdown-value {
        font-size: 1.25rem;
      }
      
      .cubfirst-countdown-label {
        font-size: 0.625rem;
      }
    }
    
    /* Dark Mode Toggle responsive */
    @media (max-width: 480px) {
      .cubfirst-dark-mode-toggle {
        padding: 0.5rem;
        font-size: 0.875rem;
      }
    }
    
    /* Confirm responsive */
    @media (max-width: 480px) {
      .cubfirst-confirm {
        margin: 1rem;
        padding: 1rem;
        font-size: 0.875rem;
      }
      
      .cubfirst-confirm-buttons {
        flex-direction: column;
        gap: 0.5rem;
      }
      
      .cubfirst-confirm-button {
        width: 100%;
        padding: 0.75rem;
      }
    }
    
    /* Dropdown responsive */
    @media (max-width: 480px) {
      .cubfirst-dropdown-menu {
        font-size: 0.875rem;
        min-width: 150px;
      }
      
      .cubfirst-dropdown-item {
        padding: 0.75rem;
      }
    }
    
    /* Reveal responsive */
    @media (max-width: 480px) {
      .cubfirst-reveal {
        font-size: 0.875rem;
      }
    }
    
    /* Input Mask responsive */
    @media (max-width: 480px) {
      .cubfirst-input-mask {
        font-size: 0.875rem;
        padding: 0.75rem;
      }
    }
    
    /* Filter responsive */
    @media (max-width: 480px) {
      .cubfirst-filter {
        padding: 0.5rem;
        font-size: 0.875rem;
      }
    }
    
    /* Grid Expand responsive */
    @media (max-width: 480px) {
      .cubfirst-grid-expand {
        font-size: 0.875rem;
      }
    }
    
    /* Hover Preview responsive */
    @media (max-width: 480px) {
      .cubfirst-hover-preview {
        font-size: 0.75rem;
        padding: 0.5rem;
        max-width: 200px;
      }
    }
    
    /* Load More responsive */
    @media (max-width: 480px) {
      .cubfirst-load-more {
        padding: 0.75rem;
        font-size: 0.875rem;
      }
    }
    
    /* Hamburger responsive */
    @media (max-width: 480px) {
      .cubfirst-hamburger {
        width: 24px;
        height: 18px;
      }
      
      .cubfirst-hamburger span {
        height: 2px;
      }
    }
  `;
  document.head.appendChild(style);
};

// === MODAL ===
function initModal(el: HTMLElement, options: { trigger: string }) {
  if (!validateOptions('modal', options, ['trigger'])) return;
  
  const modalContent = el.querySelector(".modal-content") as HTMLElement;
  if (!modalContent) {
    console.error('cubFirst: Modal nécessite un élément .modal-content');
    return;
  }
  
  el.classList.add("cubfirst-modal");
  modalContent.classList.add("cubfirst-modal-content");

  const closeButton = document.createElement("button");
  closeButton.textContent = "×";
  closeButton.className = "cubfirst-modal-close";
  
  const open = () => {
    el.style.display = "flex";
    document.body.style.overflow = "hidden";
    
    // Ajustements responsifs pour mobile
    if (isMobile()) {
      modalContent.style.maxHeight = "100vh";
      modalContent.style.width = "100%";
      modalContent.style.borderRadius = "0";
      modalContent.style.margin = "0";
    }
    
    el.dispatchEvent(new CustomEvent('modalOpen'));
  };
  
  const close = () => {
    el.style.display = "none";
    document.body.style.overflow = "auto";
    el.dispatchEvent(new CustomEvent('modalClose'));
  };
  
  closeButton.onclick = close;
  modalContent.appendChild(closeButton);

  const trigger = document.querySelector(options.trigger);
  if (trigger) {
    trigger.addEventListener("click", open);
  }

  el.addEventListener("click", (e) => {
    if (e.target === el) close();
  });

  const escapeHandler = (e: KeyboardEvent) => {
    if (e.key === "Escape" && el.style.display === "flex") {
      close();
    }
  };
  document.addEventListener("keydown", escapeHandler);
  
  // API publique
  const api = {
    open,
    close,
    isOpen: () => el.style.display === "flex",
    setContent: (content: string) => {
      const contentEl = modalContent.querySelector(':not(.cubfirst-modal-close)');
      if (contentEl) contentEl.innerHTML = content;
    }
  };
  
  (el as any).modalAPI = api;
  
  cleanupManager.register(el, () => {
    document.removeEventListener("keydown", escapeHandler);
    delete (el as any).modalAPI;
  });

  el.style.display = "none";
}

// === TABS ===
function initTabs(el: HTMLElement) {
  el.classList.add("cubfirst-tabs");
  let titles = el.querySelectorAll("[data-tab]");
  let contents = el.querySelectorAll(".tab-content");
  let currentTab = 0;
  
  titles.forEach(title => title.classList.add("tab-title"));
  
  const activate = (id: string) => {
    const tabIndex = Array.from(titles).findIndex(t => (t as HTMLElement).dataset.tab === id);
    if (tabIndex !== -1) currentTab = tabIndex;
    
    titles.forEach((t) =>
      t.classList.toggle("active", (t as HTMLElement).dataset.tab === id)
    );
    contents.forEach((c) => {
      const content = c as HTMLElement;
      content.style.display = content.dataset.tab === id ? "block" : "none";
    });
    
    el.dispatchEvent(new CustomEvent('tabChange', { 
      detail: { activeTab: id, tabIndex: currentTab } 
    }));
  };
  
  const refresh = () => {
    titles = el.querySelectorAll("[data-tab]");
    contents = el.querySelectorAll(".tab-content");
    titles.forEach(title => title.classList.add("tab-title"));
  };
  
  titles.forEach((t) =>
    t.addEventListener("click", () => activate((t as HTMLElement).dataset.tab!))
  );
  
  // API publique
  const api = {
    goTo: (index: number) => {
      const tabId = (titles[index] as HTMLElement)?.dataset.tab;
      if (tabId) activate(tabId);
    },
    goToTab: (tabId: string) => activate(tabId),
    getCurrentTab: () => currentTab,
    getTotalTabs: () => titles.length,
    addTab: (id: string, title: string, content: string) => {
      const titleEl = document.createElement('div');
      titleEl.setAttribute('data-tab', id);
      titleEl.className = 'tab-title';
      titleEl.textContent = title;
      
      const contentEl = document.createElement('div');
      contentEl.setAttribute('data-tab', id);
      contentEl.className = 'tab-content';
      contentEl.innerHTML = content;
      
      el.querySelector('.tab-nav')?.appendChild(titleEl);
      el.appendChild(contentEl);
      
      refresh();
      titleEl.addEventListener("click", () => activate(id));
    },
    refresh
  };
  
  (el as any).tabsAPI = api;
  
  cleanupManager.register(el, () => {
    delete (el as any).tabsAPI;
  });
  
  const first = (titles[0] as HTMLElement)?.dataset.tab;
  if (first) activate(first);
}

// === ACCORDION ===
function initAccordion(el: HTMLElement) {
  let items = Array.from(el.querySelectorAll(".accordion-item"));
  let openIndex = -1;
  
  const toggle = (index: number) => {
    const item = items[index];
    if (!item) return;
    
    const content = item.querySelector(".accordion-content") as HTMLElement;
    if (!content) return;
    
    const wasOpen = content.style.display === "block";
    
    // Fermer tous
    items.forEach((item, i) => {
      const c = item.querySelector(".accordion-content") as HTMLElement;
      if (c) c.style.display = "none";
    });
    
    // Ouvrir si fermé
    if (!wasOpen) {
      content.style.display = "block";
      openIndex = index;
    } else {
      openIndex = -1;
    }
    
    el.dispatchEvent(new CustomEvent('accordionToggle', { 
      detail: { openIndex, totalItems: items.length } 
    }));
  };
  
  items.forEach((item, index) => {
    const header = item.querySelector(".accordion-header") as HTMLElement;
    const content = item.querySelector(".accordion-content") as HTMLElement;
    
    if (!header || !content) return;
    
    content.style.display = "none";
    header.addEventListener("click", () => toggle(index));
  });
  
  // API publique
  const api = {
    open: (index: number) => {
      if (index >= 0 && index < items.length) {
        const content = items[index].querySelector(".accordion-content") as HTMLElement;
        if (content) {
          items.forEach((item) => {
            const c = item.querySelector(".accordion-content") as HTMLElement;
            if (c) c.style.display = "none";
          });
          content.style.display = "block";
          openIndex = index;
        }
      }
    },
    close: (index: number) => {
      if (index >= 0 && index < items.length) {
        const content = items[index].querySelector(".accordion-content") as HTMLElement;
        if (content) {
          content.style.display = "none";
          if (openIndex === index) openIndex = -1;
        }
      }
    },
    toggle: (index: number) => toggle(index),
    closeAll: () => {
      items.forEach((item) => {
        const c = item.querySelector(".accordion-content") as HTMLElement;
        if (c) c.style.display = "none";
      });
      openIndex = -1;
    },
    getOpenIndex: () => openIndex,
    getTotalItems: () => items.length,
    refresh: () => {
      items = Array.from(el.querySelectorAll(".accordion-item"));
    }
  };
  
  (el as any).accordionAPI = api;
  
  cleanupManager.register(el, () => {
    delete (el as any).accordionAPI;
  });
}

// === TOOLTIP ===
function initTooltip(el: HTMLElement, options: { text: string }) {
  if (!validateOptions('tooltip', options, ['text'])) return;
  
  const tip = document.createElement("div");
  tip.textContent = options.text;
  tip.className = "cubfirst-tooltip";
  Object.assign(tip.style, {
    position: "absolute",
    pointerEvents: "none",
    zIndex: "1000",
    display: "none",
    backgroundColor: "black",
    color: "white",
    padding: "4px 8px",
    borderRadius: "4px",
    fontSize: "12px",
    whiteSpace: "nowrap",
  });
  
  document.body.appendChild(tip);
  
  const showTooltip = () => {
    tip.style.display = "block";
    const rect = el.getBoundingClientRect();
    tip.style.left = `${rect.left + window.scrollX}px`;
    tip.style.top = `${rect.top + window.scrollY - tip.offsetHeight - 8}px`;
  };
  
  const hideTooltip = () => {
    tip.style.display = "none";
  };
  
  el.addEventListener("mouseenter", showTooltip);
  el.addEventListener("mouseleave", hideTooltip);
  
  // API publique
  const api = {
    show: showTooltip,
    hide: hideTooltip,
    setText: (text: string) => {
      tip.textContent = text;
    },
    setPosition: (position: 'top' | 'bottom' | 'left' | 'right') => {
      // Position sera appliquée lors du prochain show
      (tip as any).position = position;
    },
    isVisible: () => tip.style.display === "block"
  };
  
  (el as any).tooltipAPI = api;
  
  cleanupManager.register(el, () => {
    tip.remove();
    delete (el as any).tooltipAPI;
  });
}

// === TOAST ===
function initToast(
  el: HTMLElement,
  options: { message: string; type?: string; duration?: number }
) {
  let currentMessage = options.message;
  let currentType = options.type || "info";
  let currentDuration = options.duration || 3000;
  let isVisible = false;
  let timeoutId: number | null = null;
  
  el.classList.add("cubfirst-toast", `toast-${currentType}`);
  el.textContent = currentMessage;
  el.style.display = "none";
  
  const show = () => {
    if (isVisible) return;
    isVisible = true;
    el.style.display = "block";
    el.dispatchEvent(new CustomEvent('toastShow'));
    
    if (currentDuration > 0) {
      timeoutId = setTimeout(() => {
        hide();
      }, currentDuration);
    }
  };
  
  const hide = () => {
    if (!isVisible) return;
    isVisible = false;
    el.style.display = "none";
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
    el.dispatchEvent(new CustomEvent('toastHide'));
  };
  
  // API publique
  const api = {
    show,
    hide,
    toggle: () => isVisible ? hide() : show(),
    isVisible: () => isVisible,
    setMessage: (message: string) => {
      currentMessage = message;
      el.textContent = message;
    },
    setType: (type: string) => {
      el.classList.remove(`toast-${currentType}`);
      currentType = type;
      el.classList.add(`toast-${type}`);
    },
    setDuration: (duration: number) => {
      currentDuration = duration;
    },
    update: (message: string, type?: string, duration?: number) => {
      if (message) api.setMessage(message);
      if (type) api.setType(type);
      if (duration !== undefined) api.setDuration(duration);
    }
  };
  
  (el as any).toastAPI = api;
  
  cleanupManager.register(el, () => {
    if (timeoutId) clearTimeout(timeoutId);
    delete (el as any).toastAPI;
  });
  
  // Auto-show si spécifié
  if (options.message) {
    show();
  }
}

// === CONTACT FORM ===
function initContactForm(form: HTMLFormElement, options: { endpoint: string }) {
  if (!validateOptions('contact-form', options, ['endpoint'])) return;
  
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const submitBtn = form.querySelector('button[type="submit"]') as HTMLButtonElement;
    const originalText = submitBtn?.textContent || "Envoyer";
    
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Envoi...";
    }
    
    const data: Record<string, string> = {};
    new FormData(form).forEach((v, k) => (data[k] = v.toString()));
    
    try {
      const response = await fetch(options.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (response.ok) {
        alert("Message envoyé avec succès !");
        form.reset();
      } else {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }
    } catch (error) {
      console.error("Erreur:", error);
      alert("Erreur lors de l'envoi du message");
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }
    }
  });
}

// === COPY ===
function initCopy(el: HTMLElement, options: { target: string }) {
  if (!validateOptions('copy', options, ['target'])) return;
  
  let target = document.querySelector(options.target) as HTMLElement;
  if (!target) {
    console.error(`cubFirst: Élément cible "${options.target}" introuvable pour le plugin copy`);
    return;
  }
  
  const originalText = el.textContent || "Copier";
  let lastCopiedText = "";
  
  const copy = async (customText?: string) => {
    const text = customText || (
      target instanceof HTMLInputElement ||
      target instanceof HTMLTextAreaElement
        ? target.value
        : target.textContent || ""
    );
    
    try {
      await navigator.clipboard.writeText(text);
      lastCopiedText = text;
      el.textContent = "Copié !";
      setTimeout(() => (el.textContent = originalText), 2000);
      el.dispatchEvent(new CustomEvent('copySuccess', { detail: { text } }));
      return true;
    } catch {
      // Fallback pour les navigateurs plus anciens
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      
      lastCopiedText = text;
      el.textContent = "Copié !";
      setTimeout(() => (el.textContent = originalText), 2000);
      el.dispatchEvent(new CustomEvent('copySuccess', { detail: { text } }));
      return true;
    }
  };
  
  el.addEventListener("click", () => copy());
  
  // API publique
  const api = {
    copy,
    setText: (text: string) => copy(text),
    setTarget: (newTarget: string) => {
      const newEl = document.querySelector(newTarget) as HTMLElement;
      if (newEl) {
        target = newEl;
        options.target = newTarget;
      }
    },
    getLastCopied: () => lastCopiedText,
    getTargetText: () => {
      return target instanceof HTMLInputElement ||
             target instanceof HTMLTextAreaElement
        ? target.value
        : target.textContent || "";
    }
  };
  
  (el as any).copyAPI = api;
  
  cleanupManager.register(el, () => {
    delete (el as any).copyAPI;
  });
}

// === TOGGLE ===
function initToggle(el: HTMLElement, options: { target: string }) {
  const target = document.querySelector(options.target) as HTMLElement;
  if (!target) return;
  
  let isVisible = target.style.display !== "none" && !target.hasAttribute("hidden");
  
  const show = () => {
    if (isVisible) return;
    target.style.display = "";
    target.removeAttribute("hidden");
    isVisible = true;
    el.dispatchEvent(new CustomEvent('toggleShow', { detail: { target: options.target } }));
  };
  
  const hide = () => {
    if (!isVisible) return;
    target.style.display = "none";
    target.setAttribute("hidden", "true");
    isVisible = false;
    el.dispatchEvent(new CustomEvent('toggleHide', { detail: { target: options.target } }));
  };
  
  const toggle = () => {
    isVisible ? hide() : show();
  };
  
  el.addEventListener("click", toggle);
  
  // API publique
  const api = {
    show,
    hide,
    toggle,
    isVisible: () => isVisible,
    setTarget: (newTarget: string) => {
      const newEl = document.querySelector(newTarget) as HTMLElement;
      if (newEl) {
        options.target = newTarget;
        isVisible = newEl.style.display !== "none" && !newEl.hasAttribute("hidden");
      }
    }
  };
  
  (el as any).toggleAPI = api;
  
  cleanupManager.register(el, () => {
    delete (el as any).toggleAPI;
  });
}

// === SCROLLTO ===
function initScrollTo(
  el: HTMLElement,
  options: { target: string; offset?: number; behavior?: ScrollBehavior }
) {
  let target = document.querySelector(options.target) as HTMLElement;
  if (!target) return;
  
  let currentOffset = options.offset || 0;
  let currentBehavior = options.behavior || "smooth";
  
  const scrollTo = (customTarget?: string) => {
    const targetEl = customTarget ? document.querySelector(customTarget) as HTMLElement : target;
    if (!targetEl) return;
    
    const y = targetEl.getBoundingClientRect().top + window.scrollY - currentOffset;
    window.scrollTo({ top: y, behavior: currentBehavior });
    
    el.dispatchEvent(new CustomEvent('scrollToComplete', { 
      detail: { target: customTarget || options.target, offset: currentOffset } 
    }));
  };
  
  el.addEventListener("click", (e) => {
    e.preventDefault();
    scrollTo();
  });
  
  // API publique
  const api = {
    scrollTo: (customTarget?: string) => scrollTo(customTarget),
    setTarget: (newTarget: string) => {
      const newEl = document.querySelector(newTarget) as HTMLElement;
      if (newEl) {
        target = newEl;
        options.target = newTarget;
      }
    },
    setOffset: (offset: number) => {
      currentOffset = offset;
    },
    setBehavior: (behavior: ScrollBehavior) => {
      currentBehavior = behavior;
    },
    getTarget: () => options.target,
    getOffset: () => currentOffset
  };
  
  (el as any).scrollToAPI = api;
  
  cleanupManager.register(el, () => {
    delete (el as any).scrollToAPI;
  });
}

// === COUNTDOWN ===
function initCountdown(el: HTMLElement, options: { to: string }) {
  let targetDate = new Date(options.to);
  if (isNaN(targetDate.getTime())) {
    el.textContent = "Date invalide";
    return;
  }
  
  let interval: number | null = null;
  let isPaused = false;
  let isFinished = false;
  
  const update = () => {
    if (isPaused) return;
    
    const now = new Date();
    const diff = targetDate.getTime() - now.getTime();
    
    if (diff <= 0) {
      el.textContent = "Temps écoulé";
      isFinished = true;
      if (interval) clearInterval(interval);
      el.dispatchEvent(new CustomEvent('countdownFinished'));
      return;
    }
    
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff / 3600000) % 24);
    const m = Math.floor((diff / 60000) % 60);
    const s = Math.floor((diff / 1000) % 60);
    
    el.textContent = `${d}j ${h}h ${m}m ${s}s`;
    el.dispatchEvent(new CustomEvent('countdownTick', { 
      detail: { days: d, hours: h, minutes: m, seconds: s, remaining: diff } 
    }));
  };
  
  const start = () => {
    if (interval || isFinished) return;
    interval = setInterval(update, 1000);
    update();
  };
  
  const pause = () => {
    isPaused = true;
  };
  
  const resume = () => {
    isPaused = false;
  };
  
  const reset = () => {
    if (interval) {
      clearInterval(interval);
      interval = null;
    }
    isPaused = false;
    isFinished = false;
    update();
  };
  
  // API publique
  const api = {
    start,
    pause,
    resume,
    reset,
    setTarget: (newTarget: string) => {
      const newDate = new Date(newTarget);
      if (!isNaN(newDate.getTime())) {
        targetDate = newDate;
        isFinished = false;
        update();
      }
    },
    getTarget: () => targetDate.toISOString(),
    isPaused: () => isPaused,
    isFinished: () => isFinished,
    getRemaining: () => {
      const diff = targetDate.getTime() - new Date().getTime();
      return Math.max(0, diff);
    }
  };
  
  (el as any).countdownAPI = api;
  
  start();
  
  cleanupManager.register(el, () => {
    if (interval) clearInterval(interval);
    delete (el as any).countdownAPI;
  });
}

// === DARKMODE TOGGLE ===
function initDarkModeToggle(el: HTMLElement) {
  let isDarkMode = localStorage.getItem("darkMode") === "true";
  
  // Restaurer l'état au chargement
  if (isDarkMode) {
    document.documentElement.classList.add("dark-mode");
  }
  
  const toggle = () => {
    isDarkMode = !isDarkMode;
    document.documentElement.classList.toggle("dark-mode", isDarkMode);
    localStorage.setItem("darkMode", isDarkMode.toString());
    el.dispatchEvent(new CustomEvent('darkModeToggle', { detail: { isDark: isDarkMode } }));
  };
  
  const setMode = (dark: boolean) => {
    isDarkMode = dark;
    document.documentElement.classList.toggle("dark-mode", isDarkMode);
    localStorage.setItem("darkMode", isDarkMode.toString());
    el.dispatchEvent(new CustomEvent('darkModeChange', { detail: { isDark: isDarkMode } }));
  };
  
  el.addEventListener("click", toggle);
  
  // API publique
  const api = {
    toggle,
    setMode,
    getMode: () => isDarkMode,
    isEnabled: () => isDarkMode,
    enable: () => setMode(true),
    disable: () => setMode(false)
  };
  
  (el as any).darkModeAPI = api;
  
  cleanupManager.register(el, () => {
    delete (el as any).darkModeAPI;
  });
}

// === CONFIRM ===
function initConfirm(el: HTMLElement, options: { message: string }) {
  let currentMessage = options.message || "Êtes-vous sûr ?";
  let confirmCallback: (() => void) | null = null;
  let cancelCallback: (() => void) | null = null;
  
  const show = (customMessage?: string) => {
    const message = customMessage || currentMessage;
    const result = confirm(message);
    
    if (result) {
      confirmCallback?.();
      el.dispatchEvent(new CustomEvent('confirmAccept', { detail: { message } }));
    } else {
      cancelCallback?.();
      el.dispatchEvent(new CustomEvent('confirmCancel', { detail: { message } }));
    }
    
    return result;
  };
  
  el.addEventListener("click", (e) => {
    if (!show()) {
      e.preventDefault();
    }
  });
  
  // API publique
  const api = {
    show,
    setMessage: (message: string) => {
      currentMessage = message;
    },
    onConfirm: (callback: () => void) => {
      confirmCallback = callback;
    },
    onCancel: (callback: () => void) => {
      cancelCallback = callback;
    },
    getMessage: () => currentMessage
  };
  
  (el as any).confirmAPI = api;
  
  cleanupManager.register(el, () => {
    delete (el as any).confirmAPI;
  });
}

// === DROPDOWN ===
function initDropdown(el: HTMLElement, options: { trigger: string }) {
  const trigger = document.querySelector(options.trigger) as HTMLElement;
  const menu = el.querySelector(".dropdown-menu") as HTMLElement;
  if (!trigger || !menu) return;

  menu.classList.add("cubfirst-dropdown-menu");
  menu.setAttribute("hidden", "true");
  let isOpen = false;

  const open = () => {
    if (isOpen) return;
    // Fermer tous les autres dropdowns
    document
      .querySelectorAll(".cubfirst-dropdown-menu")
      .forEach((m) => m.setAttribute("hidden", "true"));
    
    menu.removeAttribute("hidden");
    isOpen = true;
    el.dispatchEvent(new CustomEvent('dropdownOpen'));
  };

  const close = () => {
    if (!isOpen) return;
    menu.setAttribute("hidden", "true");
    isOpen = false;
    el.dispatchEvent(new CustomEvent('dropdownClose'));
  };

  const toggle = () => {
    isOpen ? close() : open();
  };

  trigger.addEventListener("click", (e) => {
    e.stopPropagation();
    toggle();
  });

  document.addEventListener("click", (e) => {
    if (!el.contains(e.target as Node)) {
      close();
    }
  });

  // API publique
  const api = {
    open,
    close,
    toggle,
    isOpen: () => isOpen,
    setItems: (items: Array<{text: string, value: string, onClick?: () => void}>) => {
      menu.innerHTML = '';
      items.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'dropdown-item';
        menuItem.textContent = item.text;
        menuItem.dataset.value = item.value;
        if (item.onClick) {
          menuItem.addEventListener('click', item.onClick);
        }
        menu.appendChild(menuItem);
      });
    }
  };

  (el as any).dropdownAPI = api;

  cleanupManager.register(el, () => {
    delete (el as any).dropdownAPI;
  });
}

// === CAROUSEL ===
function initCarousel(el: HTMLElement, options: { interval?: number }) {
  let slides = Array.from(el.querySelectorAll(".carousel-slide"));
  if (slides.length === 0) return;

  el.classList.add("cubfirst-carousel");
  let current = 0;
  let autoInterval: number | null = null;
  let currentOptions = { ...options };

  // Créer les bullets container
  let bullets = document.createElement("div");
  bullets.className = "cubfirst-carousel-bullets";
  bullets.style.cssText = "display: flex; justify-content: center; gap: 8px; margin-top: 8px;";
  let bulletEls: HTMLElement[] = [];

  const updateBullets = () => {
    bullets.innerHTML = '';
    bulletEls = slides.map((_, i) => {
      const b = document.createElement("button");
      b.style.cssText = "width: 12px; height: 12px; border-radius: 50%; border: none; background-color: #d1d5db; cursor: pointer;";
      b.addEventListener("click", () => {
        api.goTo(i);
      });
      bullets.appendChild(b);
      return b;
    });
  };

  const showSlide = (i: number) => {
    if (i < 0 || i >= slides.length) return;
    current = i;
    slides.forEach((s, idx) => {
      const slide = s as HTMLElement;
      slide.classList.toggle("active", idx === i);
      if (bulletEls[idx]) {
        bulletEls[idx].style.backgroundColor = idx === i ? "#3b82f6" : "#d1d5db";
      }
    });
    
    // Émettre un événement personnalisé
    el.dispatchEvent(new CustomEvent('carouselChange', { 
      detail: { currentSlide: current, totalSlides: slides.length } 
    }));
  };

  const next = () => {
    current = (current + 1) % slides.length;
    showSlide(current);
  };

  const prev = () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  };

  // Support tactile pour mobile
  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: TouchEvent) => {
    touchEndX = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        next(); // Swipe gauche = slide suivant
      } else {
        prev(); // Swipe droite = slide précédent
      }
    }
  };

  const resetAutoplay = () => {
    if (autoInterval) clearInterval(autoInterval);
    const interval = currentOptions.interval || 5000; // 5 secondes par défaut
    if (interval > 0) {
      autoInterval = setInterval(next, interval);
    }
  };

  const refresh = () => {
    slides = Array.from(el.querySelectorAll(".carousel-slide"));
    updateBullets();
    if (current >= slides.length) {
      current = Math.max(0, slides.length - 1);
    }
    showSlide(current);
  };

  // API publique
  const api = {
    next: () => {
      next();
      resetAutoplay();
    },
    prev: () => {
      prev();
      resetAutoplay();
    },
    goTo: (index: number) => {
      if (index >= 0 && index < slides.length) {
        showSlide(index);
        resetAutoplay();
      }
    },
    play: () => {
      resetAutoplay();
    },
    pause: () => {
      if (autoInterval) {
        clearInterval(autoInterval);
        autoInterval = null;
      }
    },
    setSpeed: (interval: number) => {
      currentOptions.interval = interval;
      resetAutoplay();
    },
    refresh: refresh,
    getCurrentSlide: () => current,
    getTotalSlides: () => slides.length,
    isPlaying: () => autoInterval !== null
  };

  // Stocker l'API sur l'élément
  (el as any).carouselAPI = api;

  // Event listeners pour les boutons
  el.querySelector('[data-carousel="next"]')?.addEventListener("click", api.next);
  el.querySelector('[data-carousel="prev"]')?.addEventListener("click", api.prev);

  // Support tactile pour mobile/tablette
  el.addEventListener('touchstart', handleTouchStart, { passive: true });
  el.addEventListener('touchend', handleTouchEnd, { passive: true });

  // Initialisation
  updateBullets();
  el.appendChild(bullets);
  showSlide(current);
  resetAutoplay();

  // Observer pour détecter les changements de slides
  const observer = new MutationObserver(() => {
    const newSlides = Array.from(el.querySelectorAll(".carousel-slide"));
    if (newSlides.length !== slides.length) {
      refresh();
    }
  });
  observer.observe(el, { childList: true, subtree: true });

  // Enregistrer le nettoyage
  cleanupManager.register(el, () => {
    if (autoInterval) clearInterval(autoInterval);
    observer.disconnect();
    delete (el as any).carouselAPI;
  });
}

// === REVEAL-ON-SCROLL ===
function initReveal(el: HTMLElement, options: { animation?: string }) {
  el.style.opacity = "0";
  el.style.transition = "opacity 0.6s ease";
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.classList.add(`cubfirst-reveal-${options.animation || "fade"}`);
          observer.disconnect();
        }
      });
    },
    { threshold: 0.1 }
  );
  
  observer.observe(el);
}

// === INPUT MASK ===
function initInputMask(el: HTMLInputElement, options: { type: string }) {
  if (options.type === "phone") {
    el.setAttribute("maxlength", "14");
    el.addEventListener("input", () => {
      const value = el.value.replace(/\D/g, "");
      if (value.length >= 10) {
        el.value = value.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, "$1 $2 $3 $4 $5");
      } else {
        el.value = value;
      }
    });
  }
  
  if (options.type === "date") {
    el.setAttribute("placeholder", "JJ/MM/AAAA");
    el.setAttribute("maxlength", "10");
    el.addEventListener("input", () => {
      const value = el.value.replace(/\D/g, "");
      if (value.length >= 8) {
        el.value = value.replace(/(\d{2})(\d{2})(\d{4})/, "$1/$2/$3");
      } else if (value.length >= 4) {
        el.value = value.replace(/(\d{2})(\d{2})/, "$1/$2");
      } else {
        el.value = value;
      }
    });
  }
}


// === CARD ===
function initCard(
  el: HTMLElement,
  options: { title?: string; content?: string; image?: string; footer?: string }
) {
  // Au lieu de remplacer l'élément, on le modifie
  el.className = "cubfirst-card";
  el.style.cssText = "border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); padding: 1rem; background: white; display: flex; flex-direction: column; gap: 0.5rem;";

  if (options.image) {
    const img = document.createElement("img");
    img.src = options.image;
    img.alt = options.title || "";
    img.style.cssText = "border-radius: 6px; width: 100%; object-fit: cover;";
    el.appendChild(img);
  }

  if (options.title) {
    const h3 = document.createElement("h3");
    h3.textContent = options.title;
    h3.style.cssText = "font-size: 1.25rem; font-weight: bold; margin: 0;";
    el.appendChild(h3);
  }

  if (options.content) {
    const p = document.createElement("p");
    p.textContent = options.content;
    p.style.cssText = "font-size: 0.875rem; color: #6b7280; margin: 0;";
    el.appendChild(p);
  }

  if (options.footer) {
    const f = document.createElement("div");
    f.textContent = options.footer;
    f.style.cssText = "font-size: 0.75rem; color: #9ca3af; padding-top: 0.5rem; border-top: 1px solid #e5e7eb;";
    el.appendChild(f);
  }
}

// === RATING ===
function initRating(el: HTMLElement, options: { value?: number; max?: number; readonly?: boolean }) {
  let value = options.value || 0;
  let max = options.max || 5;
  let readonly = options.readonly || false;
  
  el.classList.add("cubfirst-rating");
  
  const render = () => {
    el.innerHTML = '';
    for (let i = 1; i <= max; i++) {
      const star = document.createElement("span");
      star.textContent = "★";
      star.dataset.value = i.toString();
      star.style.cursor = readonly ? "default" : "pointer";
      star.style.color = i <= value ? "#fbbf24" : "#d1d5db";
      
      if (!readonly) {
        star.addEventListener("click", () => {
          value = i;
          render();
          el.dispatchEvent(new CustomEvent("ratingChanged", { detail: { rating: i } }));
        });
      }
      
      el.appendChild(star);
    }
  };
  
  // API publique
  const api = {
    setValue: (newValue: number) => {
      if (newValue >= 0 && newValue <= max) {
        value = newValue;
        render();
        el.dispatchEvent(new CustomEvent("ratingChanged", { detail: { rating: newValue } }));
      }
    },
    getValue: () => value,
    setMax: (newMax: number) => {
      if (newMax > 0) {
        max = newMax;
        if (value > max) value = max;
        render();
      }
    },
    getMax: () => max,
    setReadonly: (isReadonly: boolean) => {
      readonly = isReadonly;
      render();
    },
    isReadonly: () => readonly
  };
  
  (el as any).ratingAPI = api;
  
  cleanupManager.register(el, () => {
    delete (el as any).ratingAPI;
  });
  
  render();
}

// === LOAD MORE ===
function initLoadMore(
  el: HTMLElement,
  options: { target: string; batch?: number }
) {
  const items = Array.from(document.querySelectorAll<HTMLElement>(options.target));
  let visibleCount = 0;
  const batch = options.batch || 3;

  const showNextBatch = () => {
    const nextItems = items.slice(visibleCount, visibleCount + batch);
    nextItems.forEach((item) => {
      item.style.display = "";
      item.removeAttribute("hidden");
    });
    visibleCount += batch;
    
    if (visibleCount >= items.length) {
      el.style.display = "none";
    }
  };

  // Initialiser : cacher les éléments après le premier batch
  items.forEach((item, index) => {
    if (index >= batch) {
      item.style.display = "none";
      item.setAttribute("hidden", "true");
    }
  });

  el.addEventListener("click", showNextBatch);
  
  // Montrer le premier batch
  showNextBatch();
  visibleCount = batch; // Corriger le compteur
}

// === HAMBURGER ===
function initHamburger(el: HTMLElement, options: { target: string }) {
  const target = document.querySelector<HTMLElement>(options.target);
  if (!target) return;

  // Créer l'icône hamburger si elle n'existe pas
  if (!el.querySelector('span')) {
    el.className = "cubfirst-hamburger";
    for (let i = 0; i < 3; i++) {
      const span = document.createElement('span');
      el.appendChild(span);
    }
  }

  const toggleMenu = () => {
    const isHidden = target.style.display === "none" || target.hasAttribute("hidden");
    
    if (isHidden) {
      target.style.display = "";
      target.removeAttribute("hidden");
    } else {
      target.style.display = "none";
      target.setAttribute("hidden", "true");
    }
    
    el.classList.toggle("is-active");
  };

  el.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  document.addEventListener("click", (e) => {
    if (!target.contains(e.target as Node) && !el.contains(e.target as Node)) {
      target.style.display = "none";
      target.setAttribute("hidden", "true");
      el.classList.remove("is-active");
    }
  });
}

// === FILTER ===
function initFilter(
  el: HTMLElement,
  options: { target: string; value: string }
) {
  const items = document.querySelectorAll<HTMLElement>(options.target);
  
  el.addEventListener("click", () => {
    items.forEach((item) => {
      const tags = item.dataset.tag || "";
      const shouldShow = tags.includes(options.value) || options.value === "all";
      
      if (shouldShow) {
        item.style.display = "";
        item.removeAttribute("hidden");
      } else {
        item.style.display = "none";
        item.setAttribute("hidden", "true");
      }
    });
  });
}

// === GRID EXPAND ===
function initGridExpand(el: HTMLElement) {
  el.style.transition = "all 0.3s ease";
  el.style.cursor = "pointer";
  
  el.addEventListener("click", () => {
    const isExpanded = el.classList.toggle("cubfirst-grid-expanded");
    
    if (isExpanded) {
      Object.assign(el.style, {
        transform: "scale(1.05)",
        zIndex: "10",
        position: "relative",
        boxShadow: "0 10px 20px rgba(0,0,0,0.2)"
      });
    } else {
      Object.assign(el.style, {
        transform: "scale(1)",
        zIndex: "",
        position: "",
        boxShadow: ""
      });
    }
  });
}

// === PROGRESS BAR ===
function initProgressBar(
  el: HTMLElement,
  options: { 
    value?: number; 
    max?: number; 
    type?: 'bar' | 'circle' | 'steps'; 
    showText?: boolean; 
    animated?: boolean;
    color?: string;
    size?: number;
    steps?: Array<{label: string, completed?: boolean}>;
  }
) {
  let value = options.value || 0;
  let max = options.max || 100;
  let type = options.type || 'bar';
  let showText = options.showText !== false;
  let animated = options.animated !== false;
  let color = options.color || '#3b82f6';
  let size = options.size || 120;
  
  // Normaliser la valeur
  value = Math.max(0, Math.min(value, max));
  const percentage = (value / max) * 100;
  
  el.classList.add('cubfirst-progress');
  
  const updateProgress = () => {
    if (type === 'bar') {
      el.innerHTML = '';
      const progressBar = document.createElement('div');
      progressBar.className = 'cubfirst-progress-bar';
      progressBar.style.width = `${percentage}%`;
      progressBar.style.backgroundColor = color;
      
      if (showText) {
        progressBar.textContent = `${Math.round(percentage)}%`;
        progressBar.style.color = 'white';
        progressBar.style.textAlign = 'center';
        progressBar.style.lineHeight = '8px';
        progressBar.style.fontSize = '0.75rem';
      }
      
      el.appendChild(progressBar);
      
    } else if (type === 'circle') {
      el.className = 'cubfirst-progress-circle';
      el.style.width = `${size}px`;
      el.style.height = `${size}px`;
      
      const radius = (size - 16) / 2;
      const circumference = 2 * Math.PI * radius;
      const strokeDasharray = circumference;
      const strokeDashoffset = circumference - (percentage / 100) * circumference;
      
      el.innerHTML = `
        <svg>
          <circle class="progress-ring" cx="${size/2}" cy="${size/2}" r="${radius}"></circle>
          <circle class="progress-ring-fill" cx="${size/2}" cy="${size/2}" r="${radius}" 
                  stroke="${color}" stroke-dasharray="${strokeDasharray}" 
                  stroke-dashoffset="${strokeDashoffset}"></circle>
        </svg>
        ${showText ? `<div class="progress-text">${Math.round(percentage)}%</div>` : ''}
      `;
      
    } else if (type === 'steps' && options.steps) {
      el.className = 'cubfirst-progress-steps';
      el.innerHTML = '';
      
      options.steps.forEach((step, index) => {
        const stepEl = document.createElement('div');
        stepEl.className = 'cubfirst-progress-step';
        stepEl.textContent = (index + 1).toString();
        stepEl.title = step.label;
        
        if (step.completed) {
          stepEl.classList.add('completed');
        } else if (index === Math.floor((value / max) * (options.steps?.length || 0))) {
          stepEl.classList.add('current');
        } else {
          stepEl.classList.add('pending');
        }
        
        el.appendChild(stepEl);
      });
    }
    
    el.dispatchEvent(new CustomEvent('progressUpdate', { 
      detail: { value, max, percentage, type } 
    }));
  };
  
  // API publique
  const api = {
    setValue: (newValue: number) => {
      value = Math.max(0, Math.min(newValue, max));
      updateProgress();
    },
    setMax: (newMax: number) => {
      max = newMax;
      value = Math.max(0, Math.min(value, max));
      updateProgress();
    },
    setColor: (newColor: string) => {
      color = newColor;
      updateProgress();
    },
    setType: (newType: 'bar' | 'circle' | 'steps') => {
      type = newType;
      updateProgress();
    },
    getValue: () => value,
    getMax: () => max,
    getPercentage: () => percentage,
    increment: (amount: number = 1) => {
      api.setValue(value + amount);
    },
    decrement: (amount: number = 1) => {
      api.setValue(value - amount);
    },
    reset: () => {
      api.setValue(0);
    },
    complete: () => {
      api.setValue(max);
    }
  };
  
  (el as any).progressBarAPI = api;
  
  cleanupManager.register(el, () => {
    delete (el as any).progressBarAPI;
  });
  
  // Initialisation
  updateProgress();
}

// === FILE UPLOAD ===
function initFileUpload(
  el: HTMLElement,
  options: { 
    accept?: string; 
    multiple?: boolean; 
    maxSize?: number; 
    maxFiles?: number;
    endpoint?: string;
    onUpload?: (files: File[]) => void;
    onProgress?: (file: File, progress: number) => void;
    onComplete?: (file: File, response: any) => void;
    onError?: (file: File, error: string) => void;
  }
) {
  let files: File[] = [];
  let isUploading = false;
  
  el.classList.add('cubfirst-file-upload');
  
  const createFileList = () => {
    const fileList = document.createElement('div');
    fileList.className = 'cubfirst-file-list';
    
    files.forEach((file, index) => {
      const fileItem = document.createElement('div');
      fileItem.className = 'cubfirst-file-item';
      
      const fileIcon = document.createElement('div');
      fileIcon.className = 'cubfirst-file-item-icon';
      fileIcon.textContent = getFileIcon(file.type);
      
      const fileInfo = document.createElement('div');
      fileInfo.className = 'cubfirst-file-item-info';
      
      const fileName = document.createElement('div');
      fileName.className = 'cubfirst-file-item-name';
      fileName.textContent = file.name;
      
      const fileSize = document.createElement('div');
      fileSize.className = 'cubfirst-file-item-size';
      fileSize.textContent = formatFileSize(file.size);
      
      fileInfo.appendChild(fileIcon);
      fileInfo.appendChild(fileName);
      fileInfo.appendChild(fileSize);
      
      const removeBtn = document.createElement('button');
      removeBtn.className = 'cubfirst-file-item-remove';
      removeBtn.innerHTML = '×';
      removeBtn.onclick = () => removeFile(index);
      
      fileItem.appendChild(fileInfo);
      fileItem.appendChild(removeBtn);
      fileList.appendChild(fileItem);
    });
    
    return fileList;
  };
  
  const getFileIcon = (type: string) => {
    if (type.startsWith('image/')) return '🖼️';
    if (type.startsWith('video/')) return '🎥';
    if (type.startsWith('audio/')) return '🎵';
    if (type.includes('pdf')) return '📄';
    if (type.includes('word')) return '📝';
    if (type.includes('excel')) return '📊';
    if (type.includes('powerpoint')) return '📈';
    return '📁';
  };
  
  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };
  
  const removeFile = (index: number) => {
    files.splice(index, 1);
    updateDisplay();
    el.dispatchEvent(new CustomEvent('fileRemove', { detail: { files } }));
  };
  
  const updateDisplay = () => {
    el.innerHTML = `
      <div class="cubfirst-file-upload-icon">📁</div>
      <div class="cubfirst-file-upload-text">Glissez-déposez vos fichiers ici</div>
      <div class="cubfirst-file-upload-hint">ou cliquez pour sélectionner</div>
      <input type="file" ${options.multiple ? 'multiple' : ''} ${options.accept ? `accept="${options.accept}"` : ''}>
    `;
    
    if (files.length > 0) {
      el.appendChild(createFileList());
    }
  };
  
  const handleFiles = (newFiles: FileList) => {
    const fileArray = Array.from(newFiles);
    
    // Vérifier la taille maximale
    if (options.maxSize) {
      const oversizedFiles = fileArray.filter(file => file.size > options.maxSize!);
      if (oversizedFiles.length > 0) {
        alert(`Fichiers trop volumineux: ${oversizedFiles.map(f => f.name).join(', ')}`);
        return;
      }
    }
    
    // Vérifier le nombre maximum de fichiers
    if (options.maxFiles && files.length + fileArray.length > options.maxFiles) {
      alert(`Maximum ${options.maxFiles} fichiers autorisés`);
      return;
    }
    
    files.push(...fileArray);
    updateDisplay();
    el.dispatchEvent(new CustomEvent('fileAdd', { detail: { files } }));
  };
  
  // Event listeners
  el.addEventListener('click', () => {
    const input = el.querySelector('input[type="file"]') as HTMLInputElement;
    input.click();
  });
  
  el.addEventListener('dragover', (e) => {
    e.preventDefault();
    el.classList.add('dragover');
  });
  
  el.addEventListener('dragleave', () => {
    el.classList.remove('dragover');
  });
  
  el.addEventListener('drop', (e) => {
    e.preventDefault();
    el.classList.remove('dragover');
    handleFiles(e.dataTransfer!.files);
  });
  
  el.addEventListener('change', (e) => {
    const input = e.target as HTMLInputElement;
    if (input.files) {
      handleFiles(input.files);
    }
  });
  
  // API publique
  const api = {
    upload: async () => {
      if (!options.endpoint || files.length === 0) return;
      
      isUploading = true;
      el.dispatchEvent(new CustomEvent('uploadStart', { detail: { files } }));
      
      for (const file of files) {
        const formData = new FormData();
        formData.append('file', file);
        
        try {
          const response = await fetch(options.endpoint, {
            method: 'POST',
            body: formData
          });
          
          if (response.ok) {
            const result = await response.json();
            options.onComplete?.(file, result);
            el.dispatchEvent(new CustomEvent('uploadComplete', { detail: { file, result } }));
          } else {
            throw new Error(`HTTP ${response.status}`);
          }
        } catch (error) {
          const errorMsg = error instanceof Error ? error.message : 'Erreur inconnue';
          options.onError?.(file, errorMsg);
          el.dispatchEvent(new CustomEvent('uploadError', { detail: { file, error: errorMsg } }));
        }
      }
      
      isUploading = false;
      el.dispatchEvent(new CustomEvent('uploadEnd', { detail: { files } }));
    },
    clear: () => {
      files = [];
      updateDisplay();
      el.dispatchEvent(new CustomEvent('fileClear', { detail: { files } }));
    },
    getFiles: () => files,
    addFiles: (newFiles: File[]) => {
      files.push(...newFiles);
      updateDisplay();
    },
    removeFile: (index: number) => removeFile(index),
    isUploading: () => isUploading
  };
  
  (el as any).fileUploadAPI = api;
  
  cleanupManager.register(el, () => {
    delete (el as any).fileUploadAPI;
  });
  
  // Initialisation
  updateDisplay();
}

// === DATE PICKER ===
function initDatePicker(
  el: HTMLElement,
  options: { 
    format?: string; 
    minDate?: string; 
    maxDate?: string; 
    placeholder?: string;
    onSelect?: (date: Date) => void;
  }
) {
  let selectedDate: Date | null = null;
  let currentMonth = new Date().getMonth();
  let currentYear = new Date().getFullYear();
  let isOpen = false;
  
  el.classList.add('cubfirst-date-picker');
  
  const formatDate = (date: Date) => {
    const format = options.format || 'dd/mm/yyyy';
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    
    return format
      .replace('dd', day)
      .replace('mm', month)
      .replace('yyyy', year.toString());
  };
  
  const createCalendar = () => {
    const calendar = document.createElement('div');
    calendar.className = 'cubfirst-date-picker-calendar';
    calendar.style.display = 'none';
    
    const header = document.createElement('div');
    header.className = 'cubfirst-date-picker-header';
    
    const prevBtn = document.createElement('button');
    prevBtn.className = 'cubfirst-date-picker-nav';
    prevBtn.innerHTML = '‹';
    prevBtn.onclick = () => {
      currentMonth--;
      if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
      }
      updateCalendar();
    };
    
    const nextBtn = document.createElement('button');
    nextBtn.className = 'cubfirst-date-picker-nav';
    nextBtn.innerHTML = '›';
    nextBtn.onclick = () => {
      currentMonth++;
      if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
      }
      updateCalendar();
    };
    
    const monthText = document.createElement('div');
    monthText.className = 'cubfirst-date-picker-month';
    
    const grid = document.createElement('div');
    grid.className = 'cubfirst-date-picker-grid';
    
    // Jours de la semaine
    const daysOfWeek = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
    daysOfWeek.forEach(day => {
      const dayEl = document.createElement('div');
      dayEl.textContent = day;
      dayEl.style.fontWeight = '600';
      dayEl.style.color = '#6b7280';
      grid.appendChild(dayEl);
    });
    
    const updateCalendar = () => {
      monthText.textContent = new Date(currentYear, currentMonth).toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });
      
      // Nettoyer la grille (garder les jours de la semaine)
      const existingDays = grid.querySelectorAll('.cubfirst-date-picker-day');
      existingDays.forEach(day => day.remove());
      
      const firstDay = new Date(currentYear, currentMonth, 1);
      const lastDay = new Date(currentYear, currentMonth + 1, 0);
      const startDate = new Date(firstDay);
      startDate.setDate(startDate.getDate() - firstDay.getDay());
      
      for (let i = 0; i < 42; i++) {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + i);
        
        const dayEl = document.createElement('div');
        dayEl.className = 'cubfirst-date-picker-day';
        dayEl.textContent = date.getDate().toString();
        
        if (date.getMonth() !== currentMonth) {
          dayEl.classList.add('other-month');
        }
        
        if (date.toDateString() === new Date().toDateString()) {
          dayEl.classList.add('today');
        }
        
        if (selectedDate && date.toDateString() === selectedDate.toDateString()) {
          dayEl.classList.add('selected');
        }
        
        dayEl.onclick = () => {
          selectedDate = date;
          (el.querySelector('input') as HTMLInputElement).value = formatDate(date);
          calendar.style.display = 'none';
          isOpen = false;
          options.onSelect?.(date);
          el.dispatchEvent(new CustomEvent('dateSelect', { detail: { date } }));
        };
        
        grid.appendChild(dayEl);
      }
    };
    
    header.appendChild(prevBtn);
    header.appendChild(monthText);
    header.appendChild(nextBtn);
    calendar.appendChild(header);
    calendar.appendChild(grid);
    
    return { calendar, updateCalendar };
  };
  
  const { calendar, updateCalendar } = createCalendar();
  
  el.innerHTML = `
    <input type="text" placeholder="${options.placeholder || 'Sélectionner une date'}" readonly>
  `;
  el.appendChild(calendar);
  
  const input = el.querySelector('input') as HTMLInputElement;
  
  input.addEventListener('click', () => {
    isOpen = !isOpen;
    calendar.style.display = isOpen ? 'block' : 'none';
    if (isOpen) {
      updateCalendar();
    }
  });
  
  document.addEventListener('click', (e) => {
    if (!el.contains(e.target as Node)) {
      calendar.style.display = 'none';
      isOpen = false;
    }
  });
  
  // API publique
  const api = {
    setDate: (date: Date) => {
      selectedDate = date;
      input.value = formatDate(date);
      updateCalendar();
    },
    getDate: () => selectedDate,
    clear: () => {
      selectedDate = null;
      input.value = '';
      updateCalendar();
    },
    open: () => {
      calendar.style.display = 'block';
      isOpen = true;
      updateCalendar();
    },
    close: () => {
      calendar.style.display = 'none';
      isOpen = false;
    }
  };
  
  (el as any).datePickerAPI = api;
  
  cleanupManager.register(el, () => {
    delete (el as any).datePickerAPI;
  });
}

// === COLOR PICKER ===
function initColorPicker(
  el: HTMLElement,
  options: { 
    colors?: string[]; 
    defaultColor?: string;
    onSelect?: (color: string) => void;
  }
) {
  let selectedColor = options.defaultColor || '#3b82f6';
  let isOpen = false;
  
  el.classList.add('cubfirst-color-picker');
  
  const defaultColors = [
    '#ef4444', '#f97316', '#f59e0b', '#eab308', '#84cc16', '#22c55e',
    '#10b981', '#14b8a6', '#06b6d4', '#0ea5e9', '#3b82f6', '#6366f1',
    '#8b5cf6', '#a855f7', '#d946ef', '#ec4899', '#f43f5e', '#6b7280'
  ];
  
  const colors = options.colors || defaultColors;
  
  const createPalette = () => {
    const palette = document.createElement('div');
    palette.className = 'cubfirst-color-picker-palette';
    palette.style.display = 'none';
    
    colors.forEach(color => {
      const colorEl = document.createElement('div');
      colorEl.className = 'cubfirst-color-picker-color';
      colorEl.style.backgroundColor = color;
      
      if (color === selectedColor) {
        colorEl.classList.add('selected');
      }
      
      colorEl.onclick = () => {
        selectedColor = color;
        input.style.backgroundColor = color;
        palette.style.display = 'none';
        isOpen = false;
        options.onSelect?.(color);
        el.dispatchEvent(new CustomEvent('colorSelect', { detail: { color } }));
      };
      
      palette.appendChild(colorEl);
    });
    
    return palette;
  };
  
  const input = document.createElement('input');
  input.type = 'color';
  input.className = 'cubfirst-color-picker-input';
  input.value = selectedColor;
  input.style.backgroundColor = selectedColor;
  
  const palette = createPalette();
  el.appendChild(input);
  el.appendChild(palette);
  
  input.addEventListener('click', (e) => {
    e.preventDefault();
    isOpen = !isOpen;
    palette.style.display = isOpen ? 'grid' : 'none';
  });
  
  input.addEventListener('change', (e) => {
    const target = e.target as HTMLInputElement;
    selectedColor = target.value;
    options.onSelect?.(selectedColor);
    el.dispatchEvent(new CustomEvent('colorSelect', { detail: { color: selectedColor } }));
  });
  
  document.addEventListener('click', (e) => {
    if (!el.contains(e.target as Node)) {
      palette.style.display = 'none';
      isOpen = false;
    }
  });
  
  // API publique
  const api = {
    setColor: (color: string) => {
      selectedColor = color;
      input.value = color;
      input.style.backgroundColor = color;
    },
    getColor: () => selectedColor,
    open: () => {
      palette.style.display = 'grid';
      isOpen = true;
    },
    close: () => {
      palette.style.display = 'none';
      isOpen = false;
    }
  };
  
  (el as any).colorPickerAPI = api;
  
  cleanupManager.register(el, () => {
    delete (el as any).colorPickerAPI;
  });
}

// === SLIDER ===
function initSlider(
  el: HTMLElement,
  options: { 
    min?: number; 
    max?: number; 
    value?: number; 
    step?: number;
    showValue?: boolean;
    onChange?: (value: number) => void;
  }
) {
  let value = options.value || options.min || 0;
  let min = options.min || 0;
  let max = options.max || 100;
  let step = options.step || 1;
  let isDragging = false;
  
  el.classList.add('cubfirst-slider');
  
  const track = document.createElement('div');
  track.className = 'cubfirst-slider-track';
  
  const thumb = document.createElement('div');
  thumb.className = 'cubfirst-slider-thumb';
  
  const valueDisplay = document.createElement('div');
  valueDisplay.className = 'cubfirst-slider-value';
  valueDisplay.style.display = options.showValue !== false ? 'block' : 'none';
  
  el.appendChild(track);
  el.appendChild(thumb);
  el.appendChild(valueDisplay);
  
  const updateSlider = () => {
    const percentage = ((value - min) / (max - min)) * 100;
    track.style.width = `${percentage}%`;
    thumb.style.left = `${percentage}%`;
    valueDisplay.textContent = value.toString();
    valueDisplay.style.left = `${percentage}%`;
  };
  
  const setValue = (newValue: number) => {
    value = Math.max(min, Math.min(max, newValue));
    updateSlider();
    options.onChange?.(value);
    el.dispatchEvent(new CustomEvent('sliderChange', { detail: { value } }));
  };
  
  const handleMouseDown = (e: MouseEvent) => {
    isDragging = true;
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };
  
  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    
    const rect = el.getBoundingClientRect();
    const percentage = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
    const newValue = min + (percentage / 100) * (max - min);
    setValue(Math.round(newValue / step) * step);
  };
  
  const handleMouseUp = () => {
    isDragging = false;
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };
  
  el.addEventListener('mousedown', handleMouseDown);
  
  // API publique
  const api = {
    setValue: setValue,
    getValue: () => value,
    setMin: (newMin: number) => {
      min = newMin;
      setValue(value);
    },
    setMax: (newMax: number) => {
      max = newMax;
      setValue(value);
    },
    setStep: (newStep: number) => {
      step = newStep;
    }
  };
  
  (el as any).sliderAPI = api;
  
  cleanupManager.register(el, () => {
    delete (el as any).sliderAPI;
  });
  
  // Initialisation
  updateSlider();
}

// === SWITCH ===
function initSwitch(
  el: HTMLElement,
  options: { 
    checked?: boolean; 
    disabled?: boolean;
    onChange?: (checked: boolean) => void;
  }
) {
  let checked = options.checked || false;
  let disabled = options.disabled || false;
  
  el.classList.add('cubfirst-switch');
  
  el.innerHTML = `
    <input type="checkbox" ${checked ? 'checked' : ''} ${disabled ? 'disabled' : ''}>
    <span class="cubfirst-switch-slider"></span>
  `;
  
  const input = el.querySelector('input') as HTMLInputElement;
  const slider = el.querySelector('.cubfirst-switch-slider') as HTMLElement;
  
  const updateSwitch = () => {
    input.checked = checked;
    input.disabled = disabled;
  };
  
  input.addEventListener('change', (e) => {
    checked = input.checked;
    options.onChange?.(checked);
    el.dispatchEvent(new CustomEvent('switchChange', { detail: { checked } }));
  });
  
  // API publique
  const api = {
    setChecked: (newChecked: boolean) => {
      checked = newChecked;
      updateSwitch();
    },
    getChecked: () => checked,
    setDisabled: (newDisabled: boolean) => {
      disabled = newDisabled;
      updateSwitch();
    },
    toggle: () => {
      api.setChecked(!checked);
    }
  };
  
  (el as any).switchAPI = api;
  
  cleanupManager.register(el, () => {
    delete (el as any).switchAPI;
  });
  
  // Initialisation
  updateSwitch();
}

// === BREADCRUMB ===
function initBreadcrumb(
  el: HTMLElement,
  options: { 
    items: Array<{label: string, href?: string, active?: boolean}>;
    separator?: string;
  }
) {
  el.classList.add('cubfirst-breadcrumb');
  
  const separator = options.separator || '>';
  
  const updateBreadcrumb = () => {
    el.innerHTML = '';
    
    options.items.forEach((item, index) => {
      const itemEl = document.createElement(item.href ? 'a' : 'span');
      itemEl.className = 'cubfirst-breadcrumb-item';
      
      if (item.active) {
        itemEl.classList.add('active');
      }
      
      if (item.href) {
        (itemEl as HTMLAnchorElement).href = item.href;
      }
      
      itemEl.textContent = item.label;
      el.appendChild(itemEl);
      
      if (index < options.items.length - 1) {
        const sepEl = document.createElement('span');
        sepEl.className = 'cubfirst-breadcrumb-separator';
        sepEl.textContent = separator;
        el.appendChild(sepEl);
      }
    });
  };
  
  // API publique
  const api = {
    setItems: (newItems: Array<{label: string, href?: string, active?: boolean}>) => {
      options.items = newItems;
      updateBreadcrumb();
    },
    addItem: (item: {label: string, href?: string, active?: boolean}) => {
      options.items.push(item);
      updateBreadcrumb();
    },
    removeItem: (index: number) => {
      options.items.splice(index, 1);
      updateBreadcrumb();
    },
    getItems: () => options.items
  };
  
  (el as any).breadcrumbAPI = api;
  
  cleanupManager.register(el, () => {
    delete (el as any).breadcrumbAPI;
  });
  
  // Initialisation
  updateBreadcrumb();
}

// === PAGINATION ===
function initPagination(
  el: HTMLElement,
  options: { 
    total: number; 
    perPage: number; 
    currentPage?: number;
    showEllipsis?: boolean;
    onChange?: (page: number) => void;
  }
) {
  let currentPage = options.currentPage || 1;
  const totalPages = Math.ceil(options.total / options.perPage);
  
  el.classList.add('cubfirst-pagination');
  
  const updatePagination = () => {
    el.innerHTML = '';
    
    // Bouton précédent
    const prevBtn = document.createElement('button');
    prevBtn.className = 'cubfirst-pagination-button';
    prevBtn.textContent = '‹';
    prevBtn.disabled = currentPage === 1;
    prevBtn.onclick = () => {
      if (currentPage > 1) {
        currentPage--;
        updatePagination();
        options.onChange?.(currentPage);
        el.dispatchEvent(new CustomEvent('pageChange', { detail: { page: currentPage } }));
      }
    };
    el.appendChild(prevBtn);
    
    // Pages
    const showEllipsis = options.showEllipsis !== false;
    const maxVisible = 5;
    
    if (totalPages <= maxVisible) {
      // Afficher toutes les pages
      for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.className = 'cubfirst-pagination-button';
        pageBtn.textContent = i.toString();
        if (i === currentPage) {
          pageBtn.classList.add('active');
        }
        pageBtn.onclick = () => {
          currentPage = i;
          updatePagination();
          options.onChange?.(currentPage);
          el.dispatchEvent(new CustomEvent('pageChange', { detail: { page: currentPage } }));
        };
        el.appendChild(pageBtn);
      }
    } else {
      // Logique avec ellipsis
      const start = Math.max(1, currentPage - 2);
      const end = Math.min(totalPages, currentPage + 2);
      
      if (start > 1) {
        const firstBtn = document.createElement('button');
        firstBtn.className = 'cubfirst-pagination-button';
        firstBtn.textContent = '1';
        firstBtn.onclick = () => {
          currentPage = 1;
          updatePagination();
          options.onChange?.(currentPage);
          el.dispatchEvent(new CustomEvent('pageChange', { detail: { page: currentPage } }));
        };
        el.appendChild(firstBtn);
        
        if (start > 2) {
          const ellipsis = document.createElement('span');
          ellipsis.className = 'cubfirst-pagination-ellipsis';
          ellipsis.textContent = '...';
          el.appendChild(ellipsis);
        }
      }
      
      for (let i = start; i <= end; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.className = 'cubfirst-pagination-button';
        pageBtn.textContent = i.toString();
        if (i === currentPage) {
          pageBtn.classList.add('active');
        }
        pageBtn.onclick = () => {
          currentPage = i;
          updatePagination();
          options.onChange?.(currentPage);
          el.dispatchEvent(new CustomEvent('pageChange', { detail: { page: currentPage } }));
        };
        el.appendChild(pageBtn);
      }
      
      if (end < totalPages) {
        if (end < totalPages - 1) {
          const ellipsis = document.createElement('span');
          ellipsis.className = 'cubfirst-pagination-ellipsis';
          ellipsis.textContent = '...';
          el.appendChild(ellipsis);
        }
        
        const lastBtn = document.createElement('button');
        lastBtn.className = 'cubfirst-pagination-button';
        lastBtn.textContent = totalPages.toString();
        lastBtn.onclick = () => {
          currentPage = totalPages;
          updatePagination();
          options.onChange?.(currentPage);
          el.dispatchEvent(new CustomEvent('pageChange', { detail: { page: currentPage } }));
        };
        el.appendChild(lastBtn);
      }
    }
    
    // Bouton suivant
    const nextBtn = document.createElement('button');
    nextBtn.className = 'cubfirst-pagination-button';
    nextBtn.textContent = '›';
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.onclick = () => {
      if (currentPage < totalPages) {
        currentPage++;
        updatePagination();
        options.onChange?.(currentPage);
        el.dispatchEvent(new CustomEvent('pageChange', { detail: { page: currentPage } }));
      }
    };
    el.appendChild(nextBtn);
  };
  
  // API publique
  const api = {
    setPage: (page: number) => {
      if (page >= 1 && page <= totalPages) {
        currentPage = page;
        updatePagination();
      }
    },
    getPage: () => currentPage,
    getTotalPages: () => totalPages,
    next: () => {
      if (currentPage < totalPages) {
        api.setPage(currentPage + 1);
      }
    },
    prev: () => {
      if (currentPage > 1) {
        api.setPage(currentPage - 1);
      }
    }
  };
  
  (el as any).paginationAPI = api;
  
  cleanupManager.register(el, () => {
    delete (el as any).paginationAPI;
  });
  
  // Initialisation
  updatePagination();
}

// === SIDEBAR ===
function initSidebar(
  el: HTMLElement,
  options: { 
    trigger: string; 
    overlay?: boolean;
    position?: 'left' | 'right';
    width?: string;
  }
) {
  const trigger = document.querySelector(options.trigger) as HTMLElement;
  if (!trigger) return;
  
  let isOpen = false;
  const position = options.position || 'left';
  const width = options.width || '300px';
  
  el.classList.add('cubfirst-sidebar');
  el.style.width = width;
  el.style[position] = `-${width}`;
  
  if (position === 'right') {
    el.style.left = 'auto';
    el.style.right = `-${width}`;
  }
  
  const overlay = document.createElement('div');
  overlay.className = 'cubfirst-sidebar-overlay';
  document.body.appendChild(overlay);
  
  const open = () => {
    isOpen = true;
    el.classList.add('open');
    if (options.overlay !== false) {
      overlay.classList.add('show');
    }
    document.body.style.overflow = 'hidden';
    el.dispatchEvent(new CustomEvent('sidebarOpen'));
  };
  
  const close = () => {
    isOpen = false;
    el.classList.remove('open');
    overlay.classList.remove('show');
    document.body.style.overflow = '';
    el.dispatchEvent(new CustomEvent('sidebarClose'));
  };
  
  trigger.addEventListener('click', open);
  overlay.addEventListener('click', close);
  
  // API publique
  const api = {
    open,
    close,
    toggle: () => isOpen ? close() : open(),
    isOpen: () => isOpen
  };
  
  (el as any).sidebarAPI = api;
  
  cleanupManager.register(el, () => {
    overlay.remove();
    delete (el as any).sidebarAPI;
  });
}

// === STICKY ===
function initSticky(
  el: HTMLElement,
  options: { 
    offset?: number; 
    zIndex?: number;
    onStick?: () => void;
    onUnstick?: () => void;
  }
) {
  const offset = options.offset || 0;
  const zIndex = options.zIndex || 10;
  let isSticky = false;
  
  el.classList.add('cubfirst-sticky');
  el.style.zIndex = zIndex.toString();
  
  const handleScroll = () => {
    const rect = el.getBoundingClientRect();
    const shouldStick = rect.top <= offset;
    
    if (shouldStick && !isSticky) {
      isSticky = true;
      el.style.position = 'fixed';
      el.style.top = `${offset}px`;
      options.onStick?.();
      el.dispatchEvent(new CustomEvent('sticky'));
    } else if (!shouldStick && isSticky) {
      isSticky = false;
      el.style.position = '';
      el.style.top = '';
      options.onUnstick?.();
      el.dispatchEvent(new CustomEvent('unsticky'));
    }
  };
  
  window.addEventListener('scroll', handleScroll);
  
  // API publique
  const api = {
    isSticky: () => isSticky,
    setOffset: (newOffset: number) => {
      // L'offset sera utilisé au prochain scroll
    }
  };
  
  (el as any).stickyAPI = api;
  
  cleanupManager.register(el, () => {
    window.removeEventListener('scroll', handleScroll);
    delete (el as any).stickyAPI;
  });
}

// === ALERT ===
function initAlert(
  el: HTMLElement,
  options: { 
    type?: 'success' | 'error' | 'warning' | 'info';
    title?: string;
    message: string;
    dismissible?: boolean;
    duration?: number;
    onClose?: () => void;
  }
) {
  const type = options.type || 'info';
  const dismissible = options.dismissible !== false;
  const duration = options.duration || 0;
  
  el.classList.add('cubfirst-alert', type);
  
  const iconMap = {
    success: '✅',
    error: '❌',
    warning: '⚠️',
    info: 'ℹ️'
  };
  
  el.innerHTML = `
    <div class="cubfirst-alert-icon">${iconMap[type]}</div>
    <div class="cubfirst-alert-content">
      ${options.title ? `<div class="cubfirst-alert-title">${options.title}</div>` : ''}
      <div class="cubfirst-alert-message">${options.message}</div>
    </div>
    ${dismissible ? '<button class="cubfirst-alert-close">×</button>' : ''}
  `;
  
  const closeBtn = el.querySelector('.cubfirst-alert-close') as HTMLButtonElement;
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      el.remove();
      options.onClose?.();
      el.dispatchEvent(new CustomEvent('alertClose'));
    });
  }
  
  if (duration > 0) {
    setTimeout(() => {
      el.remove();
      options.onClose?.();
      el.dispatchEvent(new CustomEvent('alertClose'));
    }, duration);
  }
  
  // API publique
  const api = {
    close: () => {
      el.remove();
      options.onClose?.();
      el.dispatchEvent(new CustomEvent('alertClose'));
    },
    setMessage: (message: string) => {
      const messageEl = el.querySelector('.cubfirst-alert-message') as HTMLElement;
      if (messageEl) messageEl.textContent = message;
    }
  };
  
  (el as any).alertAPI = api;
  
  cleanupManager.register(el, () => {
    delete (el as any).alertAPI;
  });
}

// === SKELETON ===
function initSkeleton(
  el: HTMLElement,
  options: { 
    lines?: number;
    type?: 'line' | 'circle' | 'rect';
    width?: string;
    height?: string;
  }
) {
  const lines = options.lines || 3;
  const type = options.type || 'line';
  
  el.classList.add('cubfirst-skeleton');
  
  if (type === 'line') {
    for (let i = 0; i < lines; i++) {
      const line = document.createElement('div');
      line.className = 'cubfirst-skeleton-line';
      if (options.width) line.style.width = options.width;
      if (options.height) line.style.height = options.height;
      el.appendChild(line);
    }
  } else if (type === 'circle') {
    const circle = document.createElement('div');
    circle.className = 'cubfirst-skeleton-circle';
    if (options.width) circle.style.width = options.width;
    if (options.height) circle.style.height = options.height;
    el.appendChild(circle);
  } else if (type === 'rect') {
    const rect = document.createElement('div');
    rect.className = 'cubfirst-skeleton-rect';
    if (options.width) rect.style.width = options.width;
    if (options.height) rect.style.height = options.height;
    el.appendChild(rect);
  }
  
  // API publique
  const api = {
    show: () => el.style.display = '',
    hide: () => el.style.display = 'none',
    setLines: (newLines: number) => {
      el.innerHTML = '';
      for (let i = 0; i < newLines; i++) {
        const line = document.createElement('div');
        line.className = 'cubfirst-skeleton-line';
        el.appendChild(line);
      }
    }
  };
  
  (el as any).skeletonAPI = api;
  
  cleanupManager.register(el, () => {
    delete (el as any).skeletonAPI;
  });
}

// === LAZY LOAD ===
function initLazyLoad(
  el: HTMLElement,
  options: { 
    threshold?: number;
    rootMargin?: string;
    onLoad?: () => void;
  }
) {
  el.classList.add('cubfirst-lazy-load');
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          el.classList.add('loaded');
          observer.unobserve(el);
          options.onLoad?.();
          el.dispatchEvent(new CustomEvent('lazyLoad'));
        }
      });
    },
    {
      threshold: options.threshold || 0.1,
      rootMargin: options.rootMargin || '0px'
    }
  );
  
  observer.observe(el);
  
  // API publique
  const api = {
    load: () => {
      el.classList.add('loaded');
      observer.unobserve(el);
    },
    isLoaded: () => el.classList.contains('loaded')
  };
  
  (el as any).lazyLoadAPI = api;
  
  cleanupManager.register(el, () => {
    observer.disconnect();
    delete (el as any).lazyLoadAPI;
  });
}

// === SEARCH ===
function initSearch(
  el: HTMLElement,
  options: { 
    target: string;
    placeholder?: string;
    minLength?: number;
    onSearch?: (query: string, results: HTMLElement[]) => void;
  }
) {
  el.classList.add('cubfirst-search');
  
  const minLength = options.minLength || 2;
  let searchTimeout: number | null = null;
  
  el.innerHTML = `
    <input type="text" class="cubfirst-search-input" placeholder="${options.placeholder || 'Rechercher...'}">
    <button class="cubfirst-search-button">🔍</button>
    <div class="cubfirst-search-results" style="display: none;"></div>
  `;
  
  const input = el.querySelector('.cubfirst-search-input') as HTMLInputElement;
  const results = el.querySelector('.cubfirst-search-results') as HTMLElement;
  const button = el.querySelector('.cubfirst-search-button') as HTMLButtonElement;
  
  const search = (query: string) => {
    if (query.length < minLength) {
      results.style.display = 'none';
      return;
    }
    
    const targets = document.querySelectorAll(options.target) as NodeListOf<HTMLElement>;
    const matches: HTMLElement[] = [];
    
    targets.forEach(target => {
      const text = target.textContent?.toLowerCase() || '';
      if (text.includes(query.toLowerCase())) {
        matches.push(target);
      }
    });
    
    if (matches.length > 0) {
      results.innerHTML = '';
      matches.forEach(match => {
        const result = document.createElement('div');
        result.className = 'cubfirst-search-result';
        result.textContent = match.textContent || '';
        result.onclick = () => {
          match.scrollIntoView({ behavior: 'smooth' });
          results.style.display = 'none';
        };
        results.appendChild(result);
      });
      results.style.display = 'block';
    } else {
      results.style.display = 'none';
    }
    
    options.onSearch?.(query, matches);
    el.dispatchEvent(new CustomEvent('search', { detail: { query, results: matches } }));
  };
  
  input.addEventListener('input', (e) => {
    const target = e.target as HTMLInputElement;
    const query = target.value;
    
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }
    
    searchTimeout = setTimeout(() => {
      search(query);
    }, 300);
  });
  
  button.addEventListener('click', () => {
    search(input.value);
  });
  
  document.addEventListener('click', (e) => {
    if (!el.contains(e.target as Node)) {
      results.style.display = 'none';
    }
  });
  
  // API publique
  const api = {
    search: (query: string) => {
      input.value = query;
      search(query);
    },
    clear: () => {
      input.value = '';
      results.style.display = 'none';
    },
    getQuery: () => input.value
  };
  
  (el as any).searchAPI = api;
  
  cleanupManager.register(el, () => {
    if (searchTimeout) clearTimeout(searchTimeout);
    delete (el as any).searchAPI;
  });
}

// === AUTOCOMPLETE ===
function initAutocomplete(
  el: HTMLElement,
  options: { 
    source: string[] | ((query: string) => Promise<string[]>);
    minLength?: number;
    onSelect?: (item: string) => void;
  }
) {
  el.classList.add('cubfirst-autocomplete');
  
  const minLength = options.minLength || 1;
  let searchTimeout: number | null = null;
  
  el.innerHTML = `
    <input type="text" class="cubfirst-autocomplete-input" placeholder="Tapez pour rechercher...">
    <div class="cubfirst-autocomplete-dropdown" style="display: none;"></div>
  `;
  
  const input = el.querySelector('.cubfirst-autocomplete-input') as HTMLInputElement;
  const dropdown = el.querySelector('.cubfirst-autocomplete-dropdown') as HTMLElement;
  
  const showSuggestions = (suggestions: string[]) => {
    dropdown.innerHTML = '';
    
    suggestions.forEach(suggestion => {
      const item = document.createElement('div');
      item.className = 'cubfirst-autocomplete-item';
      item.textContent = suggestion;
      item.onclick = () => {
        input.value = suggestion;
        dropdown.style.display = 'none';
        options.onSelect?.(suggestion);
        el.dispatchEvent(new CustomEvent('autocompleteSelect', { detail: { item: suggestion } }));
      };
      dropdown.appendChild(item);
    });
    
    dropdown.style.display = suggestions.length > 0 ? 'block' : 'none';
  };
  
  const search = async (query: string) => {
    if (query.length < minLength) {
      dropdown.style.display = 'none';
      return;
    }
    
    try {
      let suggestions: string[];
      
      if (typeof options.source === 'function') {
        suggestions = await options.source(query);
      } else {
        suggestions = options.source.filter(item => 
          item.toLowerCase().includes(query.toLowerCase())
        );
      }
      
      showSuggestions(suggestions);
    } catch (error) {
      console.error('Erreur autocomplete:', error);
      dropdown.style.display = 'none';
    }
  };
  
  input.addEventListener('input', (e) => {
    const target = e.target as HTMLInputElement;
    const query = target.value;
    
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }
    
    searchTimeout = setTimeout(() => {
      search(query);
    }, 300);
  });
  
  document.addEventListener('click', (e) => {
    if (!el.contains(e.target as Node)) {
      dropdown.style.display = 'none';
    }
  });
  
  // API publique
  const api = {
    setValue: (value: string) => {
      input.value = value;
    },
    getValue: () => input.value,
    clear: () => {
      input.value = '';
      dropdown.style.display = 'none';
    }
  };
  
  (el as any).autocompleteAPI = api;
  
  cleanupManager.register(el, () => {
    if (searchTimeout) clearTimeout(searchTimeout);
    delete (el as any).autocompleteAPI;
  });
}

// === SWIPE ===
function initSwipe(
  el: HTMLElement,
  options: { 
    threshold?: number;
    onSwipeLeft?: () => void;
    onSwipeRight?: () => void;
    onSwipeUp?: () => void;
    onSwipeDown?: () => void;
  }
) {
  el.classList.add('cubfirst-swipe');
  
  const threshold = options.threshold || 50;
  let startX = 0;
  let startY = 0;
  let endX = 0;
  let endY = 0;
  
  el.addEventListener('touchstart', (e) => {
    const touch = e.touches[0];
    startX = touch.clientX;
    startY = touch.clientY;
  });
  
  el.addEventListener('touchend', (e) => {
    const touch = e.changedTouches[0];
    endX = touch.clientX;
    endY = touch.clientY;
    
    const deltaX = endX - startX;
    const deltaY = endY - startY;
    
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      // Swipe horizontal
      if (Math.abs(deltaX) > threshold) {
        if (deltaX > 0) {
          options.onSwipeRight?.();
          el.dispatchEvent(new CustomEvent('swipeRight'));
        } else {
          options.onSwipeLeft?.();
          el.dispatchEvent(new CustomEvent('swipeLeft'));
        }
      }
    } else {
      // Swipe vertical
      if (Math.abs(deltaY) > threshold) {
        if (deltaY > 0) {
          options.onSwipeDown?.();
          el.dispatchEvent(new CustomEvent('swipeDown'));
        } else {
          options.onSwipeUp?.();
          el.dispatchEvent(new CustomEvent('swipeUp'));
        }
      }
    }
  });
  
  // API publique
  const api = {
    setThreshold: (newThreshold: number) => {
      // Le threshold sera utilisé au prochain swipe
    }
  };
  
  (el as any).swipeAPI = api;
  
  cleanupManager.register(el, () => {
    delete (el as any).swipeAPI;
  });
}

// === DATA TABLE ===
function initDataTable(
  el: HTMLElement,
  options: { 
    data: any[];
    columns: Array<{key: string, title: string, sortable?: boolean, filterable?: boolean}>;
    sortable?: boolean;
    filterable?: boolean;
    searchable?: boolean;
    pagination?: boolean;
    perPage?: number;
    exportable?: boolean;
    selectable?: boolean;
    onRowClick?: (row: any, index: number) => void;
    onSort?: (column: string, direction: 'asc' | 'desc') => void;
    onFilter?: (filters: Record<string, any>) => void;
    onSearch?: (query: string) => void;
    onExport?: (format: 'csv' | 'json') => void;
  }
) {
  let data = options.data || [];
  let filteredData = [...data];
  let sortedColumn = '';
  let sortDirection: 'asc' | 'desc' = 'asc';
  let currentPage = 1;
  let perPage = options.perPage || 10;
  let searchQuery = '';
  let filters: Record<string, any> = {};
  let selectedRows: Set<number> = new Set();
  
  el.classList.add('cubfirst-data-table-container');
  
  const createTable = () => {
    const startIndex = (currentPage - 1) * perPage;
    const endIndex = startIndex + perPage;
    const pageData = filteredData.slice(startIndex, endIndex);
    
    let html = `
      <div class="cubfirst-data-table-toolbar">
        <div class="cubfirst-data-table-search">
          <input type="text" placeholder="Rechercher..." value="${searchQuery}">
        </div>
        <div class="cubfirst-data-table-filters">
          ${options.exportable ? `
            <div class="cubfirst-data-table-export">
              <button onclick="exportData('csv')">CSV</button>
              <button onclick="exportData('json')">JSON</button>
            </div>
          ` : ''}
        </div>
      </div>
      
      <table class="cubfirst-data-table">
        <thead>
          <tr>
            ${options.selectable ? '<th><input type="checkbox" id="select-all"></th>' : ''}
            ${options.columns.map(col => `
              <th class="${col.sortable !== false ? 'sortable' : ''}" data-column="${col.key}">
                ${col.title}
              </th>
            `).join('')}
          </tr>
        </thead>
        <tbody>
          ${pageData.length === 0 ? `
            <tr>
              <td colspan="${options.columns.length + (options.selectable ? 1 : 0)}" class="cubfirst-data-table-empty">
                Aucune donnée trouvée
              </td>
            </tr>
          ` : pageData.map((row, index) => `
            <tr class="${selectedRows.has(startIndex + index) ? 'selected' : ''}" data-index="${startIndex + index}">
              ${options.selectable ? `
                <td><input type="checkbox" ${selectedRows.has(startIndex + index) ? 'checked' : ''}></td>
              ` : ''}
              ${options.columns.map(col => `
                <td>${row[col.key] || ''}</td>
              `).join('')}
            </tr>
          `).join('')}
        </tbody>
      </table>
      
      ${options.pagination !== false ? `
        <div class="cubfirst-data-table-pagination">
          <div class="cubfirst-data-table-info">
            Affichage de ${startIndex + 1} à ${Math.min(endIndex, filteredData.length)} sur ${filteredData.length} résultats
          </div>
          <div class="cubfirst-data-table-export">
            <button onclick="previousPage()" ${currentPage === 1 ? 'disabled' : ''}>‹</button>
            <span>Page ${currentPage} sur ${Math.ceil(filteredData.length / perPage)}</span>
            <button onclick="nextPage()" ${currentPage >= Math.ceil(filteredData.length / perPage) ? 'disabled' : ''}>›</button>
          </div>
        </div>
      ` : ''}
    `;
    
    el.innerHTML = html;
    
    // Event listeners
    setupEventListeners();
  };
  
  const setupEventListeners = () => {
    // Search
    const searchInput = el.querySelector('.cubfirst-data-table-search input') as HTMLInputElement;
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = (e.target as HTMLInputElement).value;
        filterData();
        options.onSearch?.(searchQuery);
      });
    }
    
    // Sort
    el.querySelectorAll('th.sortable').forEach(th => {
      th.addEventListener('click', () => {
        const column = (th as HTMLElement).dataset.column!;
        if (sortedColumn === column) {
          sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
        } else {
          sortedColumn = column;
          sortDirection = 'asc';
        }
        sortData();
        options.onSort?.(column, sortDirection);
      });
    });
    
    // Row click
    el.querySelectorAll('tbody tr').forEach(tr => {
      tr.addEventListener('click', (e) => {
        if ((e.target as HTMLElement).tagName !== 'INPUT') {
          const index = parseInt((tr as HTMLElement).dataset.index!);
          const row = data[index];
          options.onRowClick?.(row, index);
        }
      });
    });
    
    // Select all
    const selectAll = el.querySelector('#select-all') as HTMLInputElement;
    if (selectAll) {
      selectAll.addEventListener('change', (e) => {
        const checked = (e.target as HTMLInputElement).checked;
        const checkboxes = el.querySelectorAll('tbody input[type="checkbox"]') as NodeListOf<HTMLInputElement>;
        checkboxes.forEach((checkbox, index) => {
          checkbox.checked = checked;
          if (checked) {
            selectedRows.add((currentPage - 1) * perPage + index);
          } else {
            selectedRows.delete((currentPage - 1) * perPage + index);
          }
        });
      });
    }
    
    // Individual checkboxes
    el.querySelectorAll('tbody input[type="checkbox"]').forEach((checkbox, index) => {
      checkbox.addEventListener('change', (e) => {
        const checked = (e.target as HTMLInputElement).checked;
        const rowIndex = (currentPage - 1) * perPage + index;
        if (checked) {
          selectedRows.add(rowIndex);
        } else {
          selectedRows.delete(rowIndex);
        }
      });
    });
  };
  
  const filterData = () => {
    filteredData = data.filter(row => {
      if (searchQuery) {
        return options.columns.some(col => 
          String(row[col.key] || '').toLowerCase().includes(searchQuery.toLowerCase())
        );
      }
      return true;
    });
    currentPage = 1;
    createTable();
  };
  
  const sortData = () => {
    if (sortedColumn) {
      filteredData.sort((a, b) => {
        const aVal = a[sortedColumn];
        const bVal = b[sortedColumn];
        
        if (aVal < bVal) return sortDirection === 'asc' ? -1 : 1;
        if (aVal > bVal) return sortDirection === 'asc' ? 1 : -1;
        return 0;
      });
    }
    createTable();
  };
  
  const exportData = (format: 'csv' | 'json') => {
    const exportData = selectedRows.size > 0 
      ? Array.from(selectedRows).map(index => data[index])
      : filteredData;
    
    if (format === 'csv') {
      const headers = options.columns.map(col => col.title).join(',');
      const rows = exportData.map(row => 
        options.columns.map(col => `"${row[col.key] || ''}"`).join(',')
      );
      const csv = [headers, ...rows].join('\n');
      
      const blob = new Blob([csv], { type: 'text/csv' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'data.csv';
      a.click();
      URL.revokeObjectURL(url);
    } else if (format === 'json') {
      const json = JSON.stringify(exportData, null, 2);
      const blob = new Blob([json], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'data.json';
      a.click();
      URL.revokeObjectURL(url);
    }
    
    options.onExport?.(format);
  };
  
  const previousPage = () => {
    if (currentPage > 1) {
      currentPage--;
      createTable();
    }
  };
  
  const nextPage = () => {
    if (currentPage < Math.ceil(filteredData.length / perPage)) {
      currentPage++;
      createTable();
    }
  };
  
  // Exposer les fonctions globalement
  (window as any).exportData = exportData;
  (window as any).previousPage = previousPage;
  (window as any).nextPage = nextPage;
  
  // API publique
  const api = {
    setData: (newData: any[]) => {
      data = newData;
      filteredData = [...data];
      currentPage = 1;
      createTable();
    },
    getData: () => data,
    getFilteredData: () => filteredData,
    getSelectedRows: () => Array.from(selectedRows).map(index => data[index]),
    clearSelection: () => {
      selectedRows.clear();
      createTable();
    },
    setPage: (page: number) => {
      currentPage = page;
      createTable();
    },
    setPerPage: (newPerPage: number) => {
      perPage = newPerPage;
      currentPage = 1;
      createTable();
    },
    search: (query: string) => {
      searchQuery = query;
      filterData();
    },
    sort: (column: string, direction: 'asc' | 'desc') => {
      sortedColumn = column;
      sortDirection = direction;
      sortData();
    },
    export: (format: 'csv' | 'json') => exportData(format)
  };
  
  (el as any).dataTableAPI = api;
  
  cleanupManager.register(el, () => {
    delete (el as any).dataTableAPI;
    delete (window as any).exportData;
    delete (window as any).previousPage;
    delete (window as any).nextPage;
  });
  
  // Initialisation
  createTable();
}

// === TIME PICKER ===
function initTimePicker(
  el: HTMLElement,
  options: { 
    format?: '12h' | '24h';
    placeholder?: string;
    onSelect?: (time: string) => void;
  }
) {
  let selectedTime = '';
  let isOpen = false;
  let format = options.format || '24h';
  
  el.classList.add('cubfirst-time-picker');
  
  const formatTime = (hours: number, minutes: number) => {
    if (format === '12h') {
      const period = hours >= 12 ? 'PM' : 'AM';
      const displayHours = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours;
      return `${displayHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${period}`;
    } else {
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    }
  };
  
  const parseTime = (timeStr: string) => {
    if (!timeStr) return { hours: 0, minutes: 0 };
    
    const match = timeStr.match(/(\d{1,2}):(\d{2})(?:\s*(AM|PM))?/i);
    if (!match) return { hours: 0, minutes: 0 };
    
    let hours = parseInt(match[1]);
    const minutes = parseInt(match[2]);
    const period = match[3]?.toUpperCase();
    
    if (format === '12h' && period) {
      if (period === 'PM' && hours !== 12) hours += 12;
      if (period === 'AM' && hours === 12) hours = 0;
    }
    
    return { hours, minutes };
  };
  
  const createTimePicker = () => {
    const { hours, minutes } = parseTime(selectedTime);
    
    el.innerHTML = `
      <input type="text" placeholder="${options.placeholder || 'Sélectionner une heure'}" readonly>
      <div class="cubfirst-time-picker-dropdown" style="display: none;">
        <div class="cubfirst-time-picker-grid">
          <div class="cubfirst-time-picker-inputs">
            <input type="number" min="0" max="${format === '12h' ? '12' : '23'}" value="${format === '12h' ? (hours === 0 ? 12 : hours > 12 ? hours - 12 : hours) : hours}" id="hours">
            <span class="cubfirst-time-picker-separator">:</span>
            <input type="number" min="0" max="59" value="${minutes}" id="minutes">
            ${format === '12h' ? `
              <select id="period">
                <option value="AM" ${hours < 12 ? 'selected' : ''}>AM</option>
                <option value="PM" ${hours >= 12 ? 'selected' : ''}>PM</option>
              </select>
            ` : ''}
          </div>
          <div class="cubfirst-time-picker-format">
            <button class="${format === '24h' ? 'active' : ''}" onclick="setFormat('24h')">24h</button>
            <button class="${format === '12h' ? 'active' : ''}" onclick="setFormat('12h')">12h</button>
          </div>
        </div>
      </div>
    `;
    
    const input = el.querySelector('input') as HTMLInputElement;
    const hoursInput = el.querySelector('#hours') as HTMLInputElement;
    const minutesInput = el.querySelector('#minutes') as HTMLInputElement;
    const periodSelect = el.querySelector('#period') as HTMLSelectElement;
    
    const updateTime = () => {
      let h = parseInt(hoursInput.value) || 0;
      const m = parseInt(minutesInput.value) || 0;
      
      if (format === '12h') {
        const period = periodSelect?.value || 'AM';
        if (period === 'PM' && h !== 12) h += 12;
        if (period === 'AM' && h === 12) h = 0;
      }
      
      selectedTime = formatTime(h, m);
      input.value = selectedTime;
      options.onSelect?.(selectedTime);
      el.dispatchEvent(new CustomEvent('timeSelect', { detail: { time: selectedTime } }));
    };
    
    hoursInput.addEventListener('input', updateTime);
    minutesInput.addEventListener('input', updateTime);
    periodSelect?.addEventListener('change', updateTime);
    
    input.addEventListener('click', () => {
      isOpen = !isOpen;
      const dropdown = el.querySelector('.cubfirst-time-picker-dropdown') as HTMLElement;
      dropdown.style.display = isOpen ? 'block' : 'none';
    });
    
    document.addEventListener('click', (e) => {
      if (!el.contains(e.target as Node)) {
        isOpen = false;
        const dropdown = el.querySelector('.cubfirst-time-picker-dropdown') as HTMLElement;
        dropdown.style.display = 'none';
      }
    });
  };
  
  const setFormat = (newFormat: '12h' | '24h') => {
    format = newFormat;
    createTimePicker();
  };
  
  // Exposer les fonctions globalement
  (window as any).setFormat = setFormat;
  
  // API publique
  const api = {
    setTime: (time: string) => {
      selectedTime = time;
      const input = el.querySelector('input') as HTMLInputElement;
      if (input) input.value = time;
    },
    getTime: () => selectedTime,
    setFormat: (newFormat: '12h' | '24h') => {
      format = newFormat;
      createTimePicker();
    },
    open: () => {
      isOpen = true;
      const dropdown = el.querySelector('.cubfirst-time-picker-dropdown') as HTMLElement;
      if (dropdown) {
        dropdown.style.display = 'block';
        
        // Ajustements responsifs pour mobile
        if (isMobile()) {
          dropdown.style.position = 'fixed';
          dropdown.style.top = '50%';
          dropdown.style.left = '50%';
          dropdown.style.transform = 'translate(-50%, -50%)';
          dropdown.style.width = '90vw';
          dropdown.style.maxWidth = '300px';
          dropdown.style.zIndex = '9999';
        }
      }
    },
    close: () => {
      isOpen = false;
      const dropdown = el.querySelector('.cubfirst-time-picker-dropdown') as HTMLElement;
      if (dropdown) dropdown.style.display = 'none';
    }
  };
  
  (el as any).timePickerAPI = api;
  
  cleanupManager.register(el, () => {
    delete (el as any).timePickerAPI;
    delete (window as any).setFormat;
  });
  
  // Initialisation
  createTimePicker();
}

// === MULTI SELECT ===
function initMultiSelect(
  el: HTMLElement,
  options: { 
    options: Array<{value: string, label: string}>;
    placeholder?: string;
    searchable?: boolean;
    maxSelections?: number;
    onSelect?: (selected: string[]) => void;
  }
) {
  let selectedValues: string[] = [];
  let isOpen = false;
  let searchQuery = '';
  
  el.classList.add('cubfirst-multi-select');
  
  const getSelectedOptions = () => {
    return options.options.filter(opt => selectedValues.includes(opt.value));
  };
  
  const createMultiSelect = () => {
    const selectedOptions = getSelectedOptions();
    
    el.innerHTML = `
      <div class="cubfirst-multi-select-input">
        <div class="cubfirst-multi-select-tags">
          ${selectedOptions.map(opt => `
            <div class="cubfirst-multi-select-tag">
              ${opt.label}
              <button class="cubfirst-multi-select-tag-remove" onclick="removeSelection('${opt.value}')">×</button>
            </div>
          `).join('')}
        </div>
        <span>▼</span>
      </div>
      <div class="cubfirst-multi-select-dropdown" style="display: none;">
        ${options.searchable !== false ? `
          <div class="cubfirst-multi-select-search">
            <input type="text" placeholder="Rechercher..." value="${searchQuery}">
          </div>
        ` : ''}
        <div class="cubfirst-multi-select-options">
          ${options.options
            .filter(opt => !searchQuery || opt.label.toLowerCase().includes(searchQuery.toLowerCase()))
            .map(opt => `
              <div class="cubfirst-multi-select-option ${selectedValues.includes(opt.value) ? 'selected' : ''}" onclick="toggleSelection('${opt.value}')">
                <input type="checkbox" ${selectedValues.includes(opt.value) ? 'checked' : ''}>
                ${opt.label}
              </div>
            `).join('')}
        </div>
      </div>
    `;
    
    setupEventListeners();
  };
  
  const setupEventListeners = () => {
    const input = el.querySelector('.cubfirst-multi-select-input') as HTMLElement;
    const dropdown = el.querySelector('.cubfirst-multi-select-dropdown') as HTMLElement;
    const searchInput = el.querySelector('.cubfirst-multi-select-search input') as HTMLInputElement;
    
    input.addEventListener('click', () => {
      isOpen = !isOpen;
      dropdown.style.display = isOpen ? 'block' : 'none';
    });
    
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = (e.target as HTMLInputElement).value;
        createMultiSelect();
      });
    }
    
    document.addEventListener('click', (e) => {
      if (!el.contains(e.target as Node)) {
        isOpen = false;
        dropdown.style.display = 'none';
      }
    });
  };
  
  const toggleSelection = (value: string) => {
    if (selectedValues.includes(value)) {
      selectedValues = selectedValues.filter(v => v !== value);
    } else {
      if (options.maxSelections && selectedValues.length >= options.maxSelections) {
        return;
      }
      selectedValues.push(value);
    }
    
    createMultiSelect();
    options.onSelect?.(selectedValues);
    el.dispatchEvent(new CustomEvent('multiSelectChange', { detail: { selected: selectedValues } }));
  };
  
  const removeSelection = (value: string) => {
    selectedValues = selectedValues.filter(v => v !== value);
    createMultiSelect();
    options.onSelect?.(selectedValues);
    el.dispatchEvent(new CustomEvent('multiSelectChange', { detail: { selected: selectedValues } }));
  };
  
  // Exposer les fonctions globalement
  (window as any).toggleSelection = toggleSelection;
  (window as any).removeSelection = removeSelection;
  
  // API publique
  const api = {
    setSelected: (values: string[]) => {
      selectedValues = values;
      createMultiSelect();
    },
    getSelected: () => selectedValues,
    addSelection: (value: string) => {
      if (!selectedValues.includes(value)) {
        if (!options.maxSelections || selectedValues.length < options.maxSelections) {
          selectedValues.push(value);
          createMultiSelect();
        }
      }
    },
    removeSelection: (value: string) => {
      selectedValues = selectedValues.filter(v => v !== value);
      createMultiSelect();
    },
    clear: () => {
      selectedValues = [];
      createMultiSelect();
    },
    open: () => {
      isOpen = true;
      const dropdown = el.querySelector('.cubfirst-multi-select-dropdown') as HTMLElement;
      if (dropdown) {
        dropdown.style.display = 'block';
        
        // Ajustements responsifs pour mobile
        if (isMobile()) {
          dropdown.style.position = 'fixed';
          dropdown.style.top = '50%';
          dropdown.style.left = '50%';
          dropdown.style.transform = 'translate(-50%, -50%)';
          dropdown.style.width = '90vw';
          dropdown.style.maxWidth = '300px';
          dropdown.style.maxHeight = '60vh';
          dropdown.style.zIndex = '9999';
        }
      }
    },
    close: () => {
      isOpen = false;
      const dropdown = el.querySelector('.cubfirst-multi-select-dropdown') as HTMLElement;
      if (dropdown) dropdown.style.display = 'none';
    }
  };
  
  (el as any).multiSelectAPI = api;
  
  cleanupManager.register(el, () => {
    delete (el as any).multiSelectAPI;
    delete (window as any).toggleSelection;
    delete (window as any).removeSelection;
  });
  
  // Initialisation
  createMultiSelect();
}

// === LOADER/SPINNER ===
function initLoader(
  el: HTMLElement,
  options: { 
    type?: 'spinner' | 'dots' | 'bars';
    size?: 'small' | 'medium' | 'large';
    text?: string;
    color?: string;
    overlay?: boolean;
    dark?: boolean;
    autoShow?: boolean;
    onShow?: () => void;
    onHide?: () => void;
  }
) {
  let isVisible = false;
  let type = options.type || 'spinner';
  let size = options.size || 'medium';
  let color = options.color || '#3b82f6';
  let text = options.text || '';
  let overlay = options.overlay || false;
  let dark = options.dark || false;
  
  el.classList.add('cubfirst-loader');
  
  const createLoader = () => {
    let loaderHtml = '';
    
    if (type === 'spinner') {
      loaderHtml = `<div class="cubfirst-loader-spinner ${size}" style="border-top-color: ${color}"></div>`;
    } else if (type === 'dots') {
      loaderHtml = `
        <div class="cubfirst-loader-dots">
          <div class="cubfirst-loader-dot" style="background: ${color}"></div>
          <div class="cubfirst-loader-dot" style="background: ${color}"></div>
          <div class="cubfirst-loader-dot" style="background: ${color}"></div>
        </div>
      `;
    } else if (type === 'bars') {
      loaderHtml = `
        <div class="cubfirst-loader-bars">
          <div class="cubfirst-loader-bar" style="background: ${color}"></div>
          <div class="cubfirst-loader-bar" style="background: ${color}"></div>
          <div class="cubfirst-loader-bar" style="background: ${color}"></div>
          <div class="cubfirst-loader-bar" style="background: ${color}"></div>
          <div class="cubfirst-loader-bar" style="background: ${color}"></div>
        </div>
      `;
    }
    
    if (text) {
      loaderHtml += `<div class="cubfirst-loader-text">${text}</div>`;
    }
    
    if (overlay) {
      el.innerHTML = `
        <div class="cubfirst-loader-overlay ${dark ? 'dark' : ''}">
          <div class="cubfirst-loader">
            ${loaderHtml}
          </div>
        </div>
      `;
    } else {
      el.innerHTML = loaderHtml;
    }
    
    if (options.autoShow !== false) {
      show();
    }
  };
  
  const show = () => {
    isVisible = true;
    el.style.display = 'block';
    options.onShow?.();
    el.dispatchEvent(new CustomEvent('loaderShow'));
  };
  
  const hide = () => {
    isVisible = false;
    el.style.display = 'none';
    options.onHide?.();
    el.dispatchEvent(new CustomEvent('loaderHide'));
  };
  
  const setType = (newType: 'spinner' | 'dots' | 'bars') => {
    type = newType;
    createLoader();
  };
  
  const setSize = (newSize: 'small' | 'medium' | 'large') => {
    size = newSize;
    createLoader();
  };
  
  const setColor = (newColor: string) => {
    color = newColor;
    createLoader();
  };
  
  const setText = (newText: string) => {
    text = newText;
    createLoader();
  };
  
  const setOverlay = (newOverlay: boolean) => {
    overlay = newOverlay;
    createLoader();
  };
  
  const setDark = (newDark: boolean) => {
    dark = newDark;
    createLoader();
  };
  
  // API publique
  const api = {
    show,
    hide,
    isVisible: () => isVisible,
    setType,
    setSize,
    setColor,
    setText,
    setOverlay,
    setDark,
    getType: () => type,
    getSize: () => size,
    getColor: () => color,
    getText: () => text,
    getOverlay: () => overlay,
    getDark: () => dark
  };
  
  (el as any).loaderAPI = api;
  
  cleanupManager.register(el, () => {
    delete (el as any).loaderAPI;
  });
  
  // Initialisation
  createLoader();
}

// === PROGRESS SCROLL ===
function initProgressScroll(
  el: HTMLElement,
  options: { 
    position?: 'top' | 'bottom' | 'left' | 'right' | 'circle';
    color?: string;
    height?: number;
    showPercentage?: boolean;
    smooth?: boolean;
    onProgress?: (percentage: number) => void;
  }
) {
  let position = options.position || 'top';
  let color = options.color || '#3b82f6';
  let height = options.height || 4;
  let showPercentage = options.showPercentage || false;
  let smooth = options.smooth !== false;
  let isVisible = true;
  let currentPercentage = 0;
  
  el.classList.add('cubfirst-progress-scroll');
  
  const createProgressBar = () => {
    if (position === 'circle') {
      el.innerHTML = `
        <div class="cubfirst-progress-scroll-circle">
          <svg viewBox="0 0 100 100">
            <circle class="cubfirst-progress-scroll-circle-bg" cx="50" cy="50" r="45"></circle>
            <circle class="cubfirst-progress-scroll-circle-progress" cx="50" cy="50" r="45" 
                    stroke-dasharray="283" stroke-dashoffset="283" style="stroke: ${color}"></circle>
          </svg>
          ${showPercentage ? '<div class="cubfirst-progress-scroll-circle-text">0%</div>' : ''}
        </div>
      `;
    } else {
      el.className = `cubfirst-progress-scroll ${position}`;
      el.style.height = position === 'left' || position === 'right' ? '100%' : `${height}px`;
      el.style.width = position === 'left' || position === 'right' ? `${height}px` : '100%';
      
      el.innerHTML = `
        <div class="cubfirst-progress-scroll-bar" style="background: ${color}"></div>
      `;
    }
  };
  
  const updateProgress = (percentage: number) => {
    currentPercentage = Math.max(0, Math.min(100, percentage));
    
    if (position === 'circle') {
      const circle = el.querySelector('.cubfirst-progress-scroll-circle-progress') as SVGElement;
      const text = el.querySelector('.cubfirst-progress-scroll-circle-text') as HTMLElement;
      
      if (circle) {
        const circumference = 2 * Math.PI * 45; // rayon = 45
        const offset = circumference - (currentPercentage / 100) * circumference;
        circle.style.strokeDashoffset = offset.toString();
      }
      
      if (text) {
        text.textContent = `${Math.round(currentPercentage)}%`;
      }
    } else {
      const bar = el.querySelector('.cubfirst-progress-scroll-bar') as HTMLElement;
      if (bar) {
        if (position === 'left' || position === 'right') {
          bar.style.height = `${currentPercentage}%`;
        } else {
          bar.style.width = `${currentPercentage}%`;
        }
      }
    }
    
    options.onProgress?.(currentPercentage);
    el.dispatchEvent(new CustomEvent('progressUpdate', { detail: { percentage: currentPercentage } }));
  };
  
  const calculateScrollProgress = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const percentage = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    updateProgress(percentage);
  };
  
  const handleScroll = () => {
    if (smooth) {
      requestAnimationFrame(calculateScrollProgress);
    } else {
      calculateScrollProgress();
    }
  };
  
  const show = () => {
    isVisible = true;
    el.classList.remove('hidden');
  };
  
  const hide = () => {
    isVisible = false;
    el.classList.add('hidden');
  };
  
  const setPosition = (newPosition: 'top' | 'bottom' | 'left' | 'right' | 'circle') => {
    position = newPosition;
    createProgressBar();
  };
  
  const setColor = (newColor: string) => {
    color = newColor;
    createProgressBar();
  };
  
  const setHeight = (newHeight: number) => {
    height = newHeight;
    createProgressBar();
  };
  
  const setShowPercentage = (show: boolean) => {
    showPercentage = show;
    createProgressBar();
  };
  
  const setSmooth = (smoothValue: boolean) => {
    smooth = smoothValue;
  };
  
  const getProgress = () => currentPercentage;
  
  // API publique
  const api = {
    show,
    hide,
    isVisible: () => isVisible,
    setPosition,
    setColor,
    setHeight,
    setShowPercentage,
    setSmooth,
    getProgress,
    getPosition: () => position,
    getColor: () => color,
    getHeight: () => height,
    getShowPercentage: () => showPercentage,
    getSmooth: () => smooth
  };
  
  (el as any).progressScrollAPI = api;
  
  // Event listeners
  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('resize', calculateScrollProgress, { passive: true });
  
  cleanupManager.register(el, () => {
    window.removeEventListener('scroll', handleScroll);
    window.removeEventListener('resize', calculateScrollProgress);
    delete (el as any).progressScrollAPI;
  });
  
  // Initialisation
  createProgressBar();
  calculateScrollProgress();
}

// === THEME SYSTEM ===
function initThemeSystem(
  el: HTMLElement,
  options: { 
    themes: string[];
    default?: string;
    persist?: boolean;
    onThemeChange?: (theme: string) => void;
  }
) {
  let currentTheme = options.default || options.themes[0] || 'light';
  let themes = options.themes || ['light', 'dark'];
  let persist = options.persist !== false;
  let isOpen = false;
  
  el.classList.add('cubfirst-theme-switcher');
  
  // Charger le thème sauvegardé
  if (persist) {
    const savedTheme = localStorage.getItem('cubfirst-theme');
    if (savedTheme && themes.includes(savedTheme)) {
      currentTheme = savedTheme;
    }
  }
  
  const applyTheme = (theme: string) => {
    document.documentElement.setAttribute('data-theme', theme);
    currentTheme = theme;
    
    if (persist) {
      localStorage.setItem('cubfirst-theme', theme);
    }
    
    options.onThemeChange?.(theme);
    el.dispatchEvent(new CustomEvent('themeChange', { detail: { theme } }));
  };
  
  const createThemeSwitcher = () => {
    el.innerHTML = `
      <button onclick="toggleThemeDropdown()">
        <div class="cubfirst-theme-preview ${currentTheme}"></div>
        <span>${currentTheme.charAt(0).toUpperCase() + currentTheme.slice(1)}</span>
        <span>▼</span>
      </button>
      <div class="cubfirst-theme-dropdown" style="display: none;">
        ${themes.map(theme => `
          <div class="cubfirst-theme-option ${theme === currentTheme ? 'active' : ''}" 
               onclick="selectTheme('${theme}')">
            <div class="cubfirst-theme-preview ${theme}"></div>
            <span>${theme.charAt(0).toUpperCase() + theme.slice(1)}</span>
          </div>
        `).join('')}
      </div>
    `;
  };
  
  const toggleThemeDropdown = () => {
    isOpen = !isOpen;
    const dropdown = el.querySelector('.cubfirst-theme-dropdown') as HTMLElement;
    dropdown.style.display = isOpen ? 'block' : 'none';
  };
  
  const selectTheme = (theme: string) => {
    applyTheme(theme);
    createThemeSwitcher();
    isOpen = false;
    const dropdown = el.querySelector('.cubfirst-theme-dropdown') as HTMLElement;
    dropdown.style.display = 'none';
  };
  
  // Exposer les fonctions globalement
  (window as any).toggleThemeDropdown = toggleThemeDropdown;
  (window as any).selectTheme = selectTheme;
  
  // API publique
  const api = {
    setTheme: (theme: string) => {
      if (themes.includes(theme)) {
        applyTheme(theme);
        createThemeSwitcher();
      }
    },
    getTheme: () => currentTheme,
    getThemes: () => themes,
    addTheme: (theme: string) => {
      if (!themes.includes(theme)) {
        themes.push(theme);
        createThemeSwitcher();
      }
    },
    removeTheme: (theme: string) => {
      themes = themes.filter(t => t !== theme);
      if (currentTheme === theme && themes.length > 0) {
        applyTheme(themes[0]);
      }
      createThemeSwitcher();
    }
  };
  
  (el as any).themeSystemAPI = api;
  
  cleanupManager.register(el, () => {
    delete (el as any).themeSystemAPI;
    delete (window as any).toggleThemeDropdown;
    delete (window as any).selectTheme;
  });
  
  // Event listeners
  document.addEventListener('click', (e) => {
    if (!el.contains(e.target as Node)) {
      isOpen = false;
      const dropdown = el.querySelector('.cubfirst-theme-dropdown') as HTMLElement;
      dropdown.style.display = 'none';
    }
  });
  
  // Initialisation
  createThemeSwitcher();
  applyTheme(currentTheme);
}

// === DRAWER ===
function initDrawer(
  el: HTMLElement,
  options: { 
    position?: 'top' | 'bottom' | 'left' | 'right';
    title?: string;
    height?: string;
    width?: string;
    backdrop?: boolean;
    onOpen?: () => void;
    onClose?: () => void;
  }
) {
  let position = options.position || 'bottom';
  let title = options.title || '';
  let height = options.height || '50%';
  let width = options.width || '300px';
  let backdrop = options.backdrop !== false;
  let isOpen = false;
  
  el.classList.add('cubfirst-drawer', position);
  
  const createDrawer = () => {
    el.innerHTML = `
      ${position === 'bottom' ? '<div class="cubfirst-drawer-handle"></div>' : ''}
      ${title ? `
        <div class="cubfirst-drawer-header">
          <div class="cubfirst-drawer-title">${title}</div>
          <button class="cubfirst-drawer-close" onclick="closeDrawer()">×</button>
        </div>
      ` : ''}
      <div class="cubfirst-drawer-content">
        ${el.innerHTML}
      </div>
    `;
    
    // Appliquer les dimensions
    if (position === 'top' || position === 'bottom') {
      el.style.height = height;
    } else {
      el.style.width = width;
    }
  };
  
  const open = () => {
    isOpen = true;
    el.classList.add('open');
    
    // Ajustements responsifs
    if (isMobile()) {
      if (position === 'left' || position === 'right') {
        el.style.width = '100vw';
      } else if (position === 'bottom') {
        el.style.height = '80vh';
      }
    }
    
    if (backdrop) {
      const overlay = document.createElement('div');
      overlay.className = 'cubfirst-drawer-overlay show';
      overlay.onclick = close;
      document.body.appendChild(overlay);
      (el as any).overlay = overlay;
    }
    
    options.onOpen?.();
    el.dispatchEvent(new CustomEvent('drawerOpen'));
  };
  
  const close = () => {
    isOpen = false;
    el.classList.remove('open');
    
    if ((el as any).overlay) {
      (el as any).overlay.remove();
      delete (el as any).overlay;
    }
    
    options.onClose?.();
    el.dispatchEvent(new CustomEvent('drawerClose'));
  };
  
  const closeDrawer = () => close();
  
  // Exposer les fonctions globalement
  (window as any).closeDrawer = closeDrawer;
  
  // API publique
  const api = {
    open,
    close,
    isOpen: () => isOpen,
    setTitle: (newTitle: string) => {
      title = newTitle;
      createDrawer();
    },
    setPosition: (newPosition: 'top' | 'bottom' | 'left' | 'right') => {
      position = newPosition;
      el.className = `cubfirst-drawer ${position}`;
      createDrawer();
    },
    setHeight: (newHeight: string) => {
      height = newHeight;
      if (position === 'top' || position === 'bottom') {
        el.style.height = height;
      }
    },
    setWidth: (newWidth: string) => {
      width = newWidth;
      if (position === 'left' || position === 'right') {
        el.style.width = width;
      }
    },
    setBackdrop: (newBackdrop: boolean) => {
      backdrop = newBackdrop;
    }
  };
  
  (el as any).drawerAPI = api;
  
  cleanupManager.register(el, () => {
    if ((el as any).overlay) {
      (el as any).overlay.remove();
    }
    delete (el as any).drawerAPI;
    delete (window as any).closeDrawer;
  });
  
  // Initialisation
  createDrawer();
}

// === RICH TEXT EDITOR ===
function initRichEditor(
  el: HTMLElement,
  options: { 
    placeholder?: string;
    toolbar?: string[];
    onContentChange?: (content: string) => void;
  }
) {
  let placeholder = options.placeholder || 'Écrivez votre contenu...';
  let toolbar = options.toolbar || ['bold', 'italic', 'underline', 'link', 'list', 'color'];
  let isActive = false;
  
  el.classList.add('cubfirst-rich-editor');
  
  const createRichEditor = () => {
    el.innerHTML = `
      <div class="cubfirst-rich-editor-toolbar">
        ${toolbar.includes('bold') ? '<button class="cubfirst-rich-editor-button" onclick="execCommand(\'bold\')" title="Gras">B</button>' : ''}
        ${toolbar.includes('italic') ? '<button class="cubfirst-rich-editor-button" onclick="execCommand(\'italic\')" title="Italique">I</button>' : ''}
        ${toolbar.includes('underline') ? '<button class="cubfirst-rich-editor-button" onclick="execCommand(\'underline\')" title="Souligné">U</button>' : ''}
        ${toolbar.includes('strikethrough') ? '<button class="cubfirst-rich-editor-button" onclick="execCommand(\'strikeThrough\')" title="Barré">S</button>' : ''}
        ${toolbar.includes('link') ? '<button class="cubfirst-rich-editor-button" onclick="createLink()" title="Lien">🔗</button>' : ''}
        ${toolbar.includes('list') ? '<button class="cubfirst-rich-editor-button" onclick="execCommand(\'insertUnorderedList\')" title="Liste">•</button>' : ''}
        ${toolbar.includes('color') ? '<button class="cubfirst-rich-editor-button" onclick="toggleColorPicker()" title="Couleur">🎨</button>' : ''}
        ${toolbar.includes('align') ? '<button class="cubfirst-rich-editor-button" onclick="execCommand(\'justifyLeft\')" title="Aligner à gauche">⬅</button>' : ''}
        ${toolbar.includes('align') ? '<button class="cubfirst-rich-editor-button" onclick="execCommand(\'justifyCenter\')" title="Centrer">↔</button>' : ''}
        ${toolbar.includes('align') ? '<button class="cubfirst-rich-editor-button" onclick="execCommand(\'justifyRight\')" title="Aligner à droite">➡</button>' : ''}
      </div>
      <div class="cubfirst-rich-editor-content" contenteditable="true" data-placeholder="${placeholder}"></div>
      ${toolbar.includes('color') ? `
        <div class="cubfirst-rich-editor-color-picker" style="display: none;">
          <div class="cubfirst-rich-editor-color-option" style="background: #000000" onclick="setColor('#000000')"></div>
          <div class="cubfirst-rich-editor-color-option" style="background: #ef4444" onclick="setColor('#ef4444')"></div>
          <div class="cubfirst-rich-editor-color-option" style="background: #f59e0b" onclick="setColor('#f59e0b')"></div>
          <div class="cubfirst-rich-editor-color-option" style="background: #10b981" onclick="setColor('#10b981')"></div>
          <div class="cubfirst-rich-editor-color-option" style="background: #3b82f6" onclick="setColor('#3b82f6')"></div>
          <div class="cubfirst-rich-editor-color-option" style="background: #8b5cf6" onclick="setColor('#8b5cf6')"></div>
          <div class="cubfirst-rich-editor-color-option" style="background: #ec4899" onclick="setColor('#ec4899')"></div>
        </div>
      ` : ''}
    `;
    
    setupEventListeners();
  };
  
  const setupEventListeners = () => {
    const content = el.querySelector('.cubfirst-rich-editor-content') as HTMLElement;
    
    content.addEventListener('input', () => {
      const html = content.innerHTML;
      options.onContentChange?.(html);
      el.dispatchEvent(new CustomEvent('contentChange', { detail: { content: html } }));
    });
    
    content.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && e.ctrlKey) {
        e.preventDefault();
        execCommand('insertParagraph');
      }
    });
  };
  
  const execCommand = (command: string, value?: string) => {
    document.execCommand(command, false, value);
    updateToolbar();
  };
  
  const createLink = () => {
    const url = prompt('Entrez l\'URL du lien:');
    if (url) {
      execCommand('createLink', url);
    }
  };
  
  const toggleColorPicker = () => {
    const picker = el.querySelector('.cubfirst-rich-editor-color-picker') as HTMLElement;
    if (picker) {
      picker.style.display = picker.style.display === 'none' ? 'block' : 'none';
    }
  };
  
  const setColor = (color: string) => {
    execCommand('foreColor', color);
    const picker = el.querySelector('.cubfirst-rich-editor-color-picker') as HTMLElement;
    if (picker) picker.style.display = 'none';
  };
  
  const updateToolbar = () => {
    const buttons = el.querySelectorAll('.cubfirst-rich-editor-button');
    buttons.forEach(button => {
      const command = button.getAttribute('onclick')?.match(/execCommand\('([^']+)'\)/)?.[1];
      if (command) {
        button.classList.toggle('active', document.queryCommandState(command));
      }
    });
  };
  
  // Exposer les fonctions globalement
  (window as any).execCommand = execCommand;
  (window as any).createLink = createLink;
  (window as any).toggleColorPicker = toggleColorPicker;
  (window as any).setColor = setColor;
  
  // API publique
  const api = {
    getContent: () => el.querySelector('.cubfirst-rich-editor-content')?.innerHTML || '',
    setContent: (html: string) => {
      const content = el.querySelector('.cubfirst-rich-editor-content') as HTMLElement;
      if (content) content.innerHTML = html;
    },
    getText: () => el.querySelector('.cubfirst-rich-editor-content')?.textContent || '',
    setText: (text: string) => {
      const content = el.querySelector('.cubfirst-rich-editor-content') as HTMLElement;
      if (content) content.textContent = text;
    },
    focus: () => {
      const content = el.querySelector('.cubfirst-rich-editor-content') as HTMLElement;
      content?.focus();
    },
    blur: () => {
      const content = el.querySelector('.cubfirst-rich-editor-content') as HTMLElement;
      content?.blur();
    },
    clear: () => {
      const content = el.querySelector('.cubfirst-rich-editor-content') as HTMLElement;
      if (content) content.innerHTML = '';
    },
    execCommand,
    updateToolbar
  };
  
  (el as any).richEditorAPI = api;
  
  cleanupManager.register(el, () => {
    delete (el as any).richEditorAPI;
    delete (window as any).execCommand;
    delete (window as any).createLink;
    delete (window as any).toggleColorPicker;
    delete (window as any).setColor;
  });
  
  // Initialisation
  createRichEditor();
}

// === HOVER PREVIEW ===
function initHoverPreview(
  el: HTMLElement,
  options: { image?: string; text?: string }
) {
  if (!options.image && !options.text) return;
  
  const preview = document.createElement("div");
  preview.className = "cubfirst-hover-preview";
  Object.assign(preview.style, {
    position: "fixed",
    zIndex: "50",
    display: "none",
    pointerEvents: "none",
    background: "#fff",
    border: "1px solid #ccc",
    padding: "6px",
    borderRadius: "6px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    maxWidth: "250px"
  });

  if (options.image) {
    const img = document.createElement("img");
    img.src = options.image;
    img.style.cssText = "max-width: 200px; width: 100%; height: auto; display: block;";
    preview.appendChild(img);
  }
  
  if (options.text) {
    const txt = document.createElement("p");
    txt.textContent = options.text;
    txt.style.cssText = "margin: 4px 0 0 0; font-size: 14px; color: #333;";
    preview.appendChild(txt);
  }

  document.body.appendChild(preview);
  
  const showPreview = () => {
    preview.style.display = "block";
  };
  
  const hidePreview = () => {
    preview.style.display = "none";
  };
  
  const movePreview = (e: MouseEvent) => {
    const x = e.pageX + 16;
    const y = e.pageY + 16;
    
    // Vérifier les limites de l'écran
    const rect = preview.getBoundingClientRect();
    const maxX = window.innerWidth - rect.width - 20;
    const maxY = window.innerHeight - rect.height - 20;
    
    preview.style.left = `${Math.min(x, maxX)}px`;
    preview.style.top = `${Math.min(y, maxY)}px`;
  };
  
  el.addEventListener("mouseenter", showPreview);
  el.addEventListener("mouseleave", hidePreview);
  el.addEventListener("mousemove", movePreview);
  
  // Nettoyage
  const observer = new MutationObserver(() => {
    if (!document.contains(el)) {
      preview.remove();
      observer.disconnect();
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
}

// === GESTION DES ERREURS ET VALIDATION ===
function parseOptions(optionsStr: string): any {
  if (!optionsStr) return {};
  try {
    return JSON.parse(optionsStr);
  } catch (e) {
    console.warn(`cubFirst: Options JSON invalides "${optionsStr}". Utilisation des options par défaut.`);
    return {};
  }
}

function validateOptions(pluginName: string, options: any, required: string[] = []): boolean {
  for (const key of required) {
    if (!options[key]) {
      console.error(`cubFirst: Option "${key}" requise pour le plugin "${pluginName}"`);
      return false;
    }
  }
  return true;
}

// Détection des appareils mobiles/tablettes
function isMobile(): boolean {
  return window.innerWidth <= 480;
}

function isTablet(): boolean {
  return window.innerWidth > 480 && window.innerWidth <= 768;
}

function isDesktop(): boolean {
  return window.innerWidth > 768;
}

// Gestionnaire d'événements responsifs
function addResponsiveListener(element: HTMLElement, event: string, handler: (e: Event) => void) {
  element.addEventListener(event, handler);
  
  // Ajouter le support tactile pour mobile
  if (event === 'click' && isMobile()) {
    element.addEventListener('touchstart', handler, { passive: true });
  }
}

// === CACHE POUR CUB-INCLUDE ===
class IncludeCache {
  private cache = new Map<string, string>();
  private loading = new Set<string>();
  
  private resolveUrl(url: string): string {
    // Si l'URL est déjà absolue (http/https) ou commence par /, la retourner telle quelle
    if (url.match(/^(https?:\/\/|\/)/)) {
      return url;
    }
    
    // Pour les URLs relatives, essayer différents chemins possibles
    const currentPath = window.location.pathname;
    const basePath = currentPath.substring(0, currentPath.lastIndexOf('/') + 1);
    
    // Retourner l'URL relative par rapport au chemin actuel
    return basePath + url;
  }

  async getContent(url: string, once: boolean = false): Promise<string> {
    const resolvedUrl = this.resolveUrl(url);
    
    // Si le contenu est déjà en cache et que once=true, le retourner
    if (once && this.cache.has(resolvedUrl)) {
      return this.cache.get(resolvedUrl)!;
    }

    // Si le fichier est déjà en cours de chargement, attendre
    if (this.loading.has(resolvedUrl)) {
      return new Promise((resolve) => {
        const checkLoading = () => {
          if (!this.loading.has(resolvedUrl)) {
            resolve(this.cache.get(resolvedUrl) || '');
          } else {
            setTimeout(checkLoading, 10);
          }
        };
        checkLoading();
      });
    }

    // Marquer comme en cours de chargement
    this.loading.add(resolvedUrl);

    try {
      const response = await fetch(resolvedUrl);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      const content = await response.text();
      
      // Mettre en cache si once=true
      if (once) {
        this.cache.set(resolvedUrl, content);
      }
      
      return content;
    } catch (error) {
      console.error(`cubFirst: Erreur lors du chargement de ${url}:`, error);
      return `<div style="color: #ef4444; padding: 0.5rem; border: 1px solid #fecaca; background: #fef2f2; border-radius: 0.25rem; font-size: 0.875rem;">
        ❌ Erreur: Impossible de charger ${url}
        <br><small>${error instanceof Error ? error.message : 'Erreur inconnue'}</small>
      </div>`;
    } finally {
      this.loading.delete(resolvedUrl);
    }
  }

  clear() {
    this.cache.clear();
    this.loading.clear();
  }
}

const includeCache = new IncludeCache();

// === PLUGIN CUB-INCLUDE ===
function initCubInclude(el: HTMLElement) {
  const src = el.getAttribute('src');
  const inlineContent = el.getAttribute('data-inline');
  const once = el.hasAttribute('once');
  
  // Priorité : data-inline puis src
  if (inlineContent) {
    // Mode inline : utiliser le contenu directement
    el.innerHTML = inlineContent;
    
    // Réinitialiser les plugins dans le contenu chargé
    const newElements = el.querySelectorAll<HTMLElement>('[data-plugin]');
    newElements.forEach(newEl => {
      const name = newEl.dataset.plugin;
      if (!name) return;
      
      const opts = parseOptions(newEl.dataset.options || '{}');
      initPlugin(newEl, name, opts);
    });
    
    // API pour le mode inline
    (el as any).cubIncludeAPI = {
      reload: () => {
        el.innerHTML = inlineContent;
        // Réinitialiser les plugins
        const newElements = el.querySelectorAll<HTMLElement>('[data-plugin]');
        newElements.forEach(newEl => {
          const name = newEl.dataset.plugin;
          if (!name) return;
          const opts = parseOptions(newEl.dataset.options || '{}');
          initPlugin(newEl, name, opts);
        });
      },
      getSrc: () => 'inline',
      isOnce: () => false
    };
    return;
  }
  
  if (!src) {
    console.error('cubFirst: cub-include nécessite un attribut "src" ou "data-inline"');
    el.innerHTML = '<div style="color: #ef4444; padding: 0.5rem;">❌ Attribut "src" ou "data-inline" manquant</div>';
    return;
  }
  
  // Vérifier si on est en mode file:// et avertir l'utilisateur
  if (location.protocol === 'file:') {
    console.warn('cubFirst: Mode file:// détecté. Pour les fichiers externes, utilisez un serveur local ou l\'attribut data-inline.');
    el.innerHTML = '<div style="color: #f59e0b; padding: 0.5rem; border: 1px solid #fbbf24; background: #fffbeb; border-radius: 0.25rem; font-size: 0.875rem;">⚠️ Mode fichier local détecté<br><small>Utilisez un serveur local ou data-inline="..." pour les composants externes</small></div>';
    return;
  }

  // Afficher un indicateur de chargement
  el.innerHTML = '<div style="color: #6b7280; padding: 0.5rem; font-style: italic;">⏳ Chargement...</div>';

  // Charger le contenu
  includeCache.getContent(src, once).then(content => {
    el.innerHTML = content;
    
    // Réinitialiser les plugins dans le contenu chargé
    const newElements = el.querySelectorAll<HTMLElement>('[data-plugin]');
    newElements.forEach(newEl => {
      const name = newEl.dataset.plugin;
      if (!name) return;
      
      const opts = parseOptions(newEl.dataset.options || '{}');
      initPlugin(newEl, name, opts);
    });
  });

  // API pour le plugin
  (el as any).cubIncludeAPI = {
    reload: () => {
      el.innerHTML = '<div style="color: #6b7280; padding: 0.5rem; font-style: italic;">⏳ Chargement...</div>';
      includeCache.getContent(src, once).then(content => {
        el.innerHTML = content;
        
        // Réinitialiser les plugins dans le contenu chargé
        const newElements = el.querySelectorAll<HTMLElement>('[data-plugin]');
        newElements.forEach(newEl => {
          const name = newEl.dataset.plugin;
          if (!name) return;
          
          const opts = parseOptions(newEl.dataset.options || '{}');
          initPlugin(newEl, name, opts);
        });
      });
    },
    getSrc: () => src,
    isOnce: () => once
  };
}

// === GESTIONNAIRE DE NETTOYAGE ===
class CleanupManager {
  private cleanupFunctions = new Map<HTMLElement, (() => void)[]>();
  private observer: MutationObserver;

  constructor() {
    this.observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.removedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            this.cleanupElement(node as HTMLElement);
          }
        });
      });
    });
    this.observer.observe(document.body, { childList: true, subtree: true });
  }

  register(element: HTMLElement, cleanup: () => void) {
    if (!this.cleanupFunctions.has(element)) {
      this.cleanupFunctions.set(element, []);
    }
    this.cleanupFunctions.get(element)!.push(cleanup);
  }

  cleanupElement(element: HTMLElement) {
    const cleanups = this.cleanupFunctions.get(element);
    if (cleanups) {
      cleanups.forEach(cleanup => {
        try {
          cleanup();
        } catch (e) {
          console.warn('cubFirst: Erreur lors du nettoyage:', e);
        }
      });
      this.cleanupFunctions.delete(element);
    }

    // Nettoyer récursivement les enfants
    element.querySelectorAll('[data-plugin]').forEach(child => {
      this.cleanupElement(child as HTMLElement);
    });
  }

  destroy() {
    this.observer.disconnect();
    this.cleanupFunctions.clear();
  }
}

const cleanupManager = new CleanupManager();

// === UTILITAIRES ===
const cubFirst = {
  // Fonction pour initialiser manuellement un plugin
  init: (selector: string, plugin: string, options: any = {}) => {
    const elements = document.querySelectorAll<HTMLElement>(selector);
    elements.forEach(el => {
      el.dataset.plugin = plugin;
      el.dataset.options = JSON.stringify(options);
      initPlugin(el, plugin, options);
    });
  },
  
  // Fonction pour créer un toast programmativement
  toast: (message: string, type: string = 'info', duration: number = 3000) => {
    const div = document.createElement('div');
    initToast(div, { message, type, duration });
  },
  
  // Fonction pour obtenir la version
  version: '2.0.0',
  
  // Fonction pour nettoyer manuellement
  cleanup: (element?: HTMLElement) => {
    if (element) {
      cleanupManager.cleanupElement(element);
    } else {
      cleanupManager.destroy();
    }
  },
  
  // Fonction pour accéder à l'API d'un plugin
  getAPI: (element: HTMLElement | string, pluginType?: string) => {
    const el = typeof element === 'string' ? document.querySelector(element) as HTMLElement : element;
    if (!el) return null;
    
    // Retourner l'API spécifique si demandée
    if (pluginType === 'carousel') return (el as any).carouselAPI || null;
    if (pluginType === 'modal') return (el as any).modalAPI || null;
    if (pluginType === 'tabs') return (el as any).tabsAPI || null;
    if (pluginType === 'accordion') return (el as any).accordionAPI || null;
    if (pluginType === 'rating') return (el as any).ratingAPI || null;
    if (pluginType === 'dropdown') return (el as any).dropdownAPI || null;
    if (pluginType === 'toast') return (el as any).toastAPI || null;
    if (pluginType === 'tooltip') return (el as any).tooltipAPI || null;
    if (pluginType === 'toggle') return (el as any).toggleAPI || null;
    if (pluginType === 'copy') return (el as any).copyAPI || null;
    if (pluginType === 'scrollto') return (el as any).scrollToAPI || null;
    if (pluginType === 'countdown') return (el as any).countdownAPI || null;
    if (pluginType === 'darkmode') return (el as any).darkModeAPI || null;
    if (pluginType === 'confirm') return (el as any).confirmAPI || null;
    if (pluginType === 'progress-bar') return (el as any).progressBarAPI || null;
    if (pluginType === 'file-upload') return (el as any).fileUploadAPI || null;
    if (pluginType === 'date-picker') return (el as any).datePickerAPI || null;
    if (pluginType === 'color-picker') return (el as any).colorPickerAPI || null;
    if (pluginType === 'slider') return (el as any).sliderAPI || null;
    if (pluginType === 'switch') return (el as any).switchAPI || null;
    if (pluginType === 'breadcrumb') return (el as any).breadcrumbAPI || null;
    if (pluginType === 'pagination') return (el as any).paginationAPI || null;
    if (pluginType === 'sidebar') return (el as any).sidebarAPI || null;
    if (pluginType === 'sticky') return (el as any).stickyAPI || null;
    if (pluginType === 'alert') return (el as any).alertAPI || null;
    if (pluginType === 'skeleton') return (el as any).skeletonAPI || null;
    if (pluginType === 'lazy-load') return (el as any).lazyLoadAPI || null;
    if (pluginType === 'search') return (el as any).searchAPI || null;
    if (pluginType === 'autocomplete') return (el as any).autocompleteAPI || null;
    if (pluginType === 'swipe') return (el as any).swipeAPI || null;
    if (pluginType === 'data-table') return (el as any).dataTableAPI || null;
    if (pluginType === 'time-picker') return (el as any).timePickerAPI || null;
    if (pluginType === 'multi-select') return (el as any).multiSelectAPI || null;
    if (pluginType === 'loader') return (el as any).loaderAPI || null;
    if (pluginType === 'progress-scroll') return (el as any).progressScrollAPI || null;
    if (pluginType === 'theme-system') return (el as any).themeSystemAPI || null;
    if (pluginType === 'drawer') return (el as any).drawerAPI || null;
    if (pluginType === 'rich-editor') return (el as any).richEditorAPI || null;
    if (pluginType === 'cub-include') return (el as any).cubIncludeAPI || null;
    
    // Ou retourner toutes les APIs disponibles
    return {
      carousel: (el as any).carouselAPI || null,
      modal: (el as any).modalAPI || null,
      tabs: (el as any).tabsAPI || null,
      accordion: (el as any).accordionAPI || null,
      rating: (el as any).ratingAPI || null,
      dropdown: (el as any).dropdownAPI || null,
      toast: (el as any).toastAPI || null,
      tooltip: (el as any).tooltipAPI || null,
      toggle: (el as any).toggleAPI || null,
      copy: (el as any).copyAPI || null,
      scrollto: (el as any).scrollToAPI || null,
      countdown: (el as any).countdownAPI || null,
      darkmode: (el as any).darkModeAPI || null,
      confirm: (el as any).confirmAPI || null,
      progressBar: (el as any).progressBarAPI || null,
      fileUpload: (el as any).fileUploadAPI || null,
      datePicker: (el as any).datePickerAPI || null,
      colorPicker: (el as any).colorPickerAPI || null,
      slider: (el as any).sliderAPI || null,
      switch: (el as any).switchAPI || null,
      breadcrumb: (el as any).breadcrumbAPI || null,
      pagination: (el as any).paginationAPI || null,
      sidebar: (el as any).sidebarAPI || null,
      sticky: (el as any).stickyAPI || null,
      alert: (el as any).alertAPI || null,
      skeleton: (el as any).skeletonAPI || null,
      lazyLoad: (el as any).lazyLoadAPI || null,
      search: (el as any).searchAPI || null,
      autocomplete: (el as any).autocompleteAPI || null,
      swipe: (el as any).swipeAPI || null,
      dataTable: (el as any).dataTableAPI || null,
      timePicker: (el as any).timePickerAPI || null,
      multiSelect: (el as any).multiSelectAPI || null,
      loader: (el as any).loaderAPI || null,
      progressScroll: (el as any).progressScrollAPI || null,
      themeSystem: (el as any).themeSystemAPI || null,
      drawer: (el as any).drawerAPI || null,
      richEditor: (el as any).richEditorAPI || null,
      cubInclude: (el as any).cubIncludeAPI || null
    };
  }
};

// Fonction auxiliaire pour initialiser un plugin
function initPlugin(el: HTMLElement, name: string, opts: any) {
  try {
    switch (name) {
      case "modal":
        initModal(el, opts);
        break;
      case "tabs":
        initTabs(el);
        break;
      case "accordion":
        initAccordion(el);
        break;
      case "tooltip":
        initTooltip(el, opts);
        break;
      case "contact-form":
        initContactForm(el as HTMLFormElement, opts);
        break;
      case "copy":
        initCopy(el, opts);
        break;
      case "toggle":
        initToggle(el, opts);
        break;
      case "scrollto":
        initScrollTo(el, opts);
        break;
      case "countdown":
        initCountdown(el, opts);
        break;
      case "darkmode-toggle":
        initDarkModeToggle(el);
        break;
      case "confirm":
        initConfirm(el, opts);
        break;
      case "dropdown":
        initDropdown(el, opts);
        break;
      case "carousel":
        initCarousel(el, opts);
        break;
      case "toast":
        initToast(el, opts);
        break;
      case "reveal":
        initReveal(el, opts);
        break;
      case "input-mask":
        initInputMask(el as HTMLInputElement, opts);
        break;
      case "card":
        initCard(el, opts);
        break;
      case "filter":
        initFilter(el, opts);
        break;
      case "grid-expand":
        initGridExpand(el);
        break;
      case "hover-preview":
        initHoverPreview(el, opts);
        break;
      case "rating":
        initRating(el, opts);
        break;
      case "load-more":
        initLoadMore(el, opts);
        break;
      case "hamburger":
        initHamburger(el, opts);
        break;
      case "progress-bar":
        initProgressBar(el, opts);
        break;
      case "file-upload":
        initFileUpload(el, opts);
        break;
      case "date-picker":
        initDatePicker(el, opts);
        break;
      case "color-picker":
        initColorPicker(el, opts);
        break;
      case "slider":
        initSlider(el, opts);
        break;
      case "switch":
        initSwitch(el, opts);
        break;
      case "breadcrumb":
        initBreadcrumb(el, opts);
        break;
      case "pagination":
        initPagination(el, opts);
        break;
      case "sidebar":
        initSidebar(el, opts);
        break;
      case "sticky":
        initSticky(el, opts);
        break;
      case "alert":
        initAlert(el, opts);
        break;
      case "skeleton":
        initSkeleton(el, opts);
        break;
      case "lazy-load":
        initLazyLoad(el, opts);
        break;
      case "search":
        initSearch(el, opts);
        break;
      case "autocomplete":
        initAutocomplete(el, opts);
        break;
          case "swipe":
      initSwipe(el, opts);
      break;
    case "data-table":
      initDataTable(el, opts);
      break;
    case "time-picker":
      initTimePicker(el, opts);
      break;
    case "multi-select":
      initMultiSelect(el, opts);
      break;
    case "loader":
      initLoader(el, opts);
      break;
    case "progress-scroll":
      initProgressScroll(el, opts);
      break;
    case "theme-system":
      initThemeSystem(el, opts);
      break;
    case "drawer":
      initDrawer(el, opts);
      break;
    case "rich-editor":
      initRichEditor(el, opts);
      break;
    case "cub-include":
      initCubInclude(el);
      break;
      default:
        console.warn(`cubFirst: Plugin "${name}" non reconnu`);
    }
  } catch (err) {
    console.error(`cubFirst: Erreur sur le plugin "${name}"`, err);
  }
}

// === SUPPORT HTMX ===
function reinitializeIncludes() {
  // Réinitialiser tous les cub-include après un swap htmx
  document.querySelectorAll<HTMLElement>('cub-include[data-plugin="cub-include"]').forEach((el) => {
    const api = (el as any).cubIncludeAPI;
    if (api && api.reload) {
      api.reload();
    }
  });
}

// Écouter les événements htmx
document.addEventListener('htmx:afterSwap', reinitializeIncludes);
document.addEventListener('htmx:afterSettle', reinitializeIncludes);

// === BOOTSTRAP ===
document.addEventListener("DOMContentLoaded", () => {
  // Injecter les styles CSS
  injectStyles();
  
  // Initialiser tous les plugins
  document.querySelectorAll<HTMLElement>("[data-plugin]").forEach((el) => {
    const name = el.dataset.plugin;
    if (!name) return;
    
    const opts = parseOptions(el.dataset.options || '{}');
    initPlugin(el, name, opts);
  });
});

// Exposer cubFirst globalement
if (typeof window !== 'undefined') {
  (window as any).cubFirst = cubFirst;
  
  // Ajouter des méthodes de convenance globales
  (window as any).getCarousel = (selector: string) => {
    const el = document.querySelector(selector) as HTMLElement;
    return el ? (el as any).carouselAPI : null;
  };
}
