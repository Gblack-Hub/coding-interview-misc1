"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Settings = exports.Main = exports.App = void 0;
const react_1 = __importDefault(require("react"));
const App = () => {
    return (react_1.default.createElement(exports.Main, null));
};
exports.App = App;
const Main = () => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(exports.Settings, null)));
};
exports.Main = Main;
const Settings = () => {
    const toggleMode = react_1.default.useCallback(() => {
    }, []);
    return (react_1.default.createElement("button", { onClick: toggleMode }, "toggle light/dark mode"));
};
exports.Settings = Settings;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGlnaHREYXJrTW9kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkxpZ2h0RGFya01vZGUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGtEQUEwQjtBQUVuQixNQUFNLEdBQUcsR0FBRyxHQUFHLEVBQUU7SUFFcEIsT0FBTyxDQUNILDhCQUFDLFlBQUksT0FBRSxDQUNWLENBQUM7QUFFTixDQUFDLENBQUE7QUFOWSxRQUFBLEdBQUcsT0FNZjtBQUdNLE1BQU0sSUFBSSxHQUFHLEdBQUcsRUFBRTtJQUVyQixPQUFPLENBQ0g7UUFDSSw4QkFBQyxnQkFBUSxPQUFFLENBQ1QsQ0FDVCxDQUFDO0FBRU4sQ0FBQyxDQUFBO0FBUlksUUFBQSxJQUFJLFFBUWhCO0FBRU0sTUFBTSxRQUFRLEdBQUcsR0FBRyxFQUFFO0lBRXpCLE1BQU0sVUFBVSxHQUFHLGVBQUssQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFO0lBRTFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLE9BQU8sQ0FDSCwwQ0FBUSxPQUFPLEVBQUUsVUFBVSw2QkFBaUMsQ0FDL0QsQ0FBQztBQUVOLENBQUMsQ0FBQTtBQVZZLFFBQUEsUUFBUSxZQVVwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjb25zdCBBcHAgPSAoKSA9PiB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8TWFpbi8+XG4gICAgKTtcblxufVxuXG5cbmV4cG9ydCBjb25zdCBNYWluID0gKCkgPT4ge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxTZXR0aW5ncy8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG5cbn1cblxuZXhwb3J0IGNvbnN0IFNldHRpbmdzID0gKCkgPT4ge1xuXG4gICAgY29uc3QgdG9nZ2xlTW9kZSA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcblxuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxidXR0b24gb25DbGljaz17dG9nZ2xlTW9kZX0+dG9nZ2xlIGxpZ2h0L2RhcmsgbW9kZTwvYnV0dG9uPlxuICAgICk7XG5cbn1cbiJdfQ==