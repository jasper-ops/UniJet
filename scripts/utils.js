exports.kebabToPascalCase = function kebabToPascalCase(str) {
    // 分割字符串，然后对每一部分应用首字母大写的转换
    return str
        .split('-')
        .map(part => part.charAt(0).toUpperCase() + part.slice(1))
        .join('');
};
